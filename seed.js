require('dotenv').config();
require('./config/database');


const Item = require('./models/item');

(async function() {

  await Item.deleteMany({});
  const items = await Item.create([
    {
        name: "FOUR NEW BOOKS IN EVERY BARISTA'S LIBRARY",
        date: "December 24, 2021 ",
        desc: 'We have to admit, 2021 was the best year for books about coffee we’ve seen in a long time. (Admittedly, some of these books were published in 2020, but like Kendrick, we were busy ducking the pandemic and only picked them up this year.) Whether you’re looking to better educate yourself or shopping for that special barista in your life, these are the books that would be on our syllabus if we were teaching a graduate seminar on coffee.', 
        image_path: "https://i.imgur.com/SGpH8yx.jpg"
    },
    {   name: 'ESPRESSO FOUNDER LAUNCHES NEW COMPANY, KICKSTARTER CAMPAIGN', 
        date: "September 23, 2020 ",
        desc: " Coffee Express founder Chaz Michael Michaels is launching a new company. Product recently debuted at the SCA Expo in New Orleans to an amazing reception", 
        image_path: "https://i.imgur.com/IYplpXr.jpg"
    },
    {   name: 'NEW MERCH: COFFEE EXPRESS LOGO T-SHIRT', 
        date: "January 1, 2019 ",
        desc: "The perfect cup of coffee may not exist, but we’re pretty sure the perfect t-shirt does: the American Apparel gray track shirt. We’ve long dreamed of slapping our logo on one is these cozy beauties, and that dream has finally become reality. We mostly made these for our team, but we have a limited number of Medium and Large t-shirts up in our webstore while supplies last. This shirt is not guaranteed to repel coffee stains, but it is guaranteed to make your morning coffee taste better. Ours does anyway.",
        image_path: "https://i.imgur.com/aEYwAau.jpg"
    },
    {   name: "COFFEE CONNOISSEURS FLOCK TO COFFEE EXPRESS SHOP ",
        date: "August 1, 2013 ",
        desc: "Like most of us, I spent much of 2020 lock-downed at home.  Nestled in the Smoky Mountains, just off the Blue Ridge Parkway, you’d be hard-pressed to find a more idyllic mountain town than Waynesville, NC.  But what’s a quaint, mountain town without a community gathering place?  ",
        image_path: "https://i.imgur.com/Xf02oZh.jpg"
    },
    {   name: 'CARRIE FISHER LOVES COFFEE',
        date: "February 9, 1992 ",
        desc: "Coffee Date, Anyone? Similar to social alcohol drinking at a bar, people enjoy gathering at coffee shops to meet with friends or to conduct a business meeting. Many coffee shops promote a relaxing environment with inviting décor, music performances, and more. Dating back centuries, coffee shops were and continue to be a venue where people can gather to talk, write, read, work, entertain one another, or to simply pass the time. Need to catch up with your best friend? Have a crush on a special someone? Meeting up for coffee is a great option.", 
        image_path: "https://i.imgur.com/55waPmH.jpg"
    },
    
  ]);

  console.log(items)

  process.exit();

})();