module.exports = {


    friendlyName: 'View all list video page',
  
  
    description: 'Display the dashboard "Welcome" page.',
  
    fn: async function () {
      let allVideo = await Video.find();

      return {allVideo};
  
    }
  
  
  };
  