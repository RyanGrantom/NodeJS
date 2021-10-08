const val = 'yes';

switch (val) {
    default:
        console.log('none were found');
        break;
    case 'yes' : 
        console.log('it was yes');
        console.log('test')
        break;
    case 'no' :
        console.log('it was no');
        break;
    case 'zero' :
    case 'none' :
        console.log('it was zero')
        
}