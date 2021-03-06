// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
    path: '/',
    name: 'Home',
    getComponent(nextState, cb) {
      import('containers/Home')
        .then(loadModule(cb))
        .catch(errorLoading);
     },
   },


   {
     path:'/dashboard',
     name:'Dashboard',
     getComponent(nextState, cb) {
       import('containers/DashboardContainer')
       .then(loadModule(cb))
       .catch(errorLoading);
     },
   },


   {
     path: '/about',
     name: 'About',
     getComponent(nextState, cb) {
       import('containers/About')
         .then(loadModule(cb))
         .catch(errorLoading);
      },
    },

        {
    path: '/ourworx',
    name: 'OurWorx',
    getComponent(nextState, cb) {
      import('containers/OurWorxContainer')
        .then(loadModule(cb))
        .catch(errorLoading);
     },
   },


   {
path: '/signin',
name: 'SignIn',
getComponent(nextState, cb) {
 import('containers/signin')
   .then(loadModule(cb))
   .catch(errorLoading);
},
},

{
path: '/signup',
name: 'SignUp',
getComponent(nextState, cb) {
import('containers/signup')
.then(loadModule(cb))
.catch(errorLoading);
},
},


  {
  path: '/contact',
  name: 'Contact',
  getComponent(nextState, cb) {
    import('containers/ContactContainer')
      .then(loadModule(cb))
      .catch(errorLoading);
   },
 },

 {
 path: '/donate',
 name: 'Donate',
 getComponent(nextState, cb) {
   import('containers/DonateContainer')
     .then(loadModule(cb))
     .catch(errorLoading);
  },
 },

 {
 path: '/gallery',
 name: 'Gallery',
 getComponent(nextState, cb) {
   import('containers/gallery')
     .then(loadModule(cb))
     .catch(errorLoading);
  },
 },

 {
 path: '/yourworx',
 name: 'Yourworx',
 getComponent(nextState, cb) {
   import('containers/Yourworxyourworx')
     .then(loadModule(cb))
     .catch(errorLoading);
  },
 },

 {
  path: '*',
  name: 'notfound',
  getComponent(nextState, cb) {
    import('containers/NotFoundPage')
      .then(loadModule(cb))
      .catch(errorLoading);
  },
},


  ];
}
