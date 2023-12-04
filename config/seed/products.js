/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  return knex('products')
    .del()
    .then(function () {
        // insert seed entries
        return knex('products').insert([
          {
            name: 'Sunglasses',
            price: 42,
            description: 'Sunglasses',
            image: 'https://images.unsplash.com/photo-1584036553516-bf83210aa16c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D',
            stocks: 10,
          },
          {
            name: 'Hat',
            price: 47,
            description: 'Hat',
            image: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF0c3xlbnwwfHwwfHx8MA%3D%3D',
            stocks: 15,
          },
          {
            name: 'Watch',
            price: 89,
            description: 'Watch',
            image: 'https://images.unsplash.com/photo-1618151444381-4ee6c3b2205a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D',
            stocks: 5,
          },
          {
            name: 'Cap',
            price: 29,
            description: 'Cap',
            image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwfGVufDB8fDB8fHww',
            stocks: 12,
          },
          {
            name: 'Heels',
            price: 65,
            description: 'Heels',
            image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVlbHN8ZW58MHx8MHx8fDA%3D',
            stocks: 11,
          },
          {
            name: 'Watch',
            price: 77,
            description: 'Watch for men',
            image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D',
            stocks: 8,
          },
          {
            name: 'Sunglasses',
            price: 50,
            description: 'Violet sunglasses',
            image: 'https://img.freepik.com/premium-photo/black-sunglasses-purple-background_647656-402.jpg',
            stocks: 15
          }
        ]);
    });
};
