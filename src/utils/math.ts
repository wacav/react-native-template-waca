// 거리
export const getDistance = (obj1: { lat: number; lng: number }, obj2: { lat: number; lng: number }): number => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(obj1.lat - obj2.lat); // deg2rad below
  var dLon = deg2rad(obj1.lng - obj2.lng);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(obj2.lat)) * Math.cos(deg2rad(obj1.lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d * 1000;
};

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}
/**
 * @param value 주민등록번호
 */
export const getAgeByResino = (value: number | string) => {
  if (typeof value === 'string') {
    value = value.replace(/-/g, '');
  } else {
    value = value.toString();
  }
  if (value.length === 13) {
    const sex = value[6]; // 1 1900 남 2  1900 여 3  2000 남 4  2000 여 5  1900 외국남 6 1900 외국여 7 2000 외국남 9 2000 외국여
    const todayYear = new Date().getFullYear();
    let year = 0;
    if (['1', '2', '5', '6'].indexOf(sex) > -1) {
      year = parseInt('19' + value[0] + value[1]);
    } else {
      year = parseInt('20' + value[0] + value[1]);
    }
    // 한국식 나이
    return todayYear - year + 1;
  } else {
    return 0;
  }
};
