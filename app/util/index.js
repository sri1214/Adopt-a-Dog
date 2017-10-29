export function  isEmpty(obj){
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        return false;
      }
    }
    return true;
}

export function getGender(gender){
  return gender==='M'?"Male":"Female";
}
export function getSize(size){
  switch(size){
    case 'S':
      return 'Small';
    case 'M':
      return 'Meduim';
    case 'L':
      return 'Large';
    case 'XL':
      return 'Xtra Large';
  }
}
