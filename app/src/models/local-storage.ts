class LocalStorage {

  getStorage(storageName: string) {
    try {
      return JSON.parse(localStorage.getItem(storageName)) || [];
    }
    catch (e) {
      return [];
    }
  }

  updateStorage(storageName, data) {
    localStorage.setItem(storageName, angular.toJson(data));
  }

}

angular
  .module('widgetApp')
  .service('localStorage', LocalStorage);