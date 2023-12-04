/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return knex('google_users')
      .del()
      .then(function () {
          // insert seed entries
          return knex('google_users').insert([
              // { 
              //   name: 'Louisa Otoo', 
              //   email: 'louisaotoo1001@gmail.com', 
              //   picture: 'https://lh3.googleusercontent.com/a/ACg8ocL2JijUJUkXKg5OIsg1hf-jp44aU88lC2MWnQOQslz4=s96-c'
              // },
              { 
                name: 'Veronica Quaye', 
                email: 'vquaye@gmail.com', 
                picture: 'https://media.istockphoto.com/id/1300972573/photo/pleasant-young-indian-woman-freelancer-consult-client-via-video-call.jpg?s=612x612&w=0&k=20&c=cbjgWR58DgUUETP6a0kpeiKTCxwJydyvXZXPeNTEOxg=',
              },
          ]);
      });
};
