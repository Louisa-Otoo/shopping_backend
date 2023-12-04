const { Model } = require('objection');
const knex = require('../config/db')
const User = require('./user')
const Order = require('./order')
Model.knex(knex);


class Transaction extends Model {
  static tableName = 'transactions';

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id'],
      properties: {
        id: { type: 'integer' },
        user_id: { type: 'integer' },
        transactio_id: { type: 'integer'},
        amount: { type: 'integer' },
        order_id: { type: 'integer' },
        status: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    };
  }

  static relationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'transactions.user_id',
        to: 'user.id'
      }
    },
    //has one product relation
    products: {
      relation: Model.HasOneRelation,
      modelClass: Order,
      join: {
        from: 'transactions.order_id',
        to: 'transactions.id'
      }
    }
  };
}

module.exports = Transaction;
