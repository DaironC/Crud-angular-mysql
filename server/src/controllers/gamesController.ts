import { Request, Response } from 'express';

import pool from '../database';

class GamesController{

    public async list (req: Request, res: Response){
       const games = await pool.query( 'SELECT * FROM games' );
       res.json(games);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
       const { id } = req.params;
       const games = await pool.query( 'SELECT * FROM games WHERE id = ?', [id] );
       if(games.length > 0) {
            return res.json(games[0]);
       }
       res.status(404).json({text: "El Juego No Existe"});
    }

    public async create ( req: Request, res: Response ): Promise<void> {
        await pool.query('INSERT INTO games set ?', [req.body])
        res.json( { message: ' Juego Guardado' } );
    }

    public async update ( req: Request, res:Response ) {
       const { id } = req.params;
       await pool.query('DELETE FROM games WHERE id = ?', [id]);
       res.json({message:'The game was deleted'});
    }

    public async delete ( req: Request, res: Response ) {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: 'El juego ha sido eliminado'});
    }

}

const gamesController = new GamesController();

export default gamesController;