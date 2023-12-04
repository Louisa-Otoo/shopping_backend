/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = function (knex) {

  return knex('admin')
      .del()
      .then(function () {
          // insert seed entries
          return knex('admin').insert([
              { 
                name: 'Ella', 
                email: 'elle@mail.com', 
                password: 'elle444', 
                profile_photo: 'https://media.istockphoto.com/id/450100369/photo/portrait-of-a-businesswoman.jpg?s=612x612&w=0&k=20&c=WK4vKnf6wNGwTqygZ62MzQ_l3fjd4H2ArcOXZ4UJmBY='
              },
          ]);
      });
};