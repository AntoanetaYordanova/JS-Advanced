function requestValidator(objInput) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messageRegexp = /^[^<>\&'"]*$/g;

    if(!validMethods.includes(objInput.method || !objInput.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    const uriRegex = /^\*$|^[a-zA-Z.0-9@#*&]+$/g;  
    
    if(!uriRegex.test(objInput.uri) || !objInput.uri){
       throw new Error('Invalid request header: Invalid URI');
    }

    if(!validVersions.includes(objInput.version) || !objInput.version){
        throw new Error('Invalid request header: Invalid Version');
    }

    if(objInput.message === undefined){
        throw new Error('Invalid request header: Invalid Message');
    } else {
        let isValidMessage = false;
        if(messageRegexp.test(objInput.message) || objInput.message === ''){
            isValidMessage = true;
        }

        if(!isValidMessage) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return objInput;
}


module.exports = requestValidator;

try {
    requestValidator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
      }
      );
} catch (error) {
    console.log(error.message);

}

// console.log(requestValidator({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
//   }
//   ));
// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }
//   )

// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   }
//   );