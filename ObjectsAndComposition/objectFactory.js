  function objectFactory(library, orders) {
      let complietedOrdersArr = [];

      for(let order of orders) {
          const {name} = order.template;
          const {parts} = order;
          const obj = {
              name
          }

          parts.forEach(element => {
              obj[element] = library[element]
          });
        complietedOrdersArr.push(obj)
      }

      return complietedOrdersArr;
  }

objectFactory({
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  },
  [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    },
  ]
  )