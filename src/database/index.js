// Conecção com banco de dados

import Sequelize from "sequelize";

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init(); //chamando o propio metodo init
  }

  init() {
    // metodo init , que irar fazer a conecção com a base de dados e carregar nossos models
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection)); //Pecorrendo cada um dos model
  }
}
export default new Database();
