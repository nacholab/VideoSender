module.exports = {

    friendlyName: 'View all list video page',
  
  
    description: 'Display the dashboard "Welcome" page.',
  
    fn: async function () {
      let allVideo = await Video.find();
      console.log(allVideo);
          var files = fs.readdirSync(path);
      return {allVideo};
  
    }
  
  
  };
  