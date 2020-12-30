import axios from 'axios';
import _ from 'lodash';
import { buildGETAxios, buildPostAxios } from './BaseService';

const baseMenuUrl = 'http://localhost:8080/menus';
const baseOrderUrl = 'http://localhost:8080/orders';


export function getMenu() {
  return buildGETAxios(baseMenuUrl);
}

export function getAppetizers() {
  return buildGETAxios(`${baseMenuUrl}?category=Appetizers`);
}

export function getSoups() {
  return buildGETAxios(`${baseMenuUrl}?category=Soup`);
}

export function createOrder(order) {
  const body = {
    ...order,
    "date_created": Date.now(),
  };
  return buildPostAxios(baseOrderUrl, body);
}

// export function createNewNote() {
//   return buildPostAxios(baseNotesUrl, {
//   	"title": "",
//   	"content": "",
//   	"date_created": Date.now()
//   });
// }
//
// export function deleteNote(id) {
//   return buildDeleteAxios(baseNotesUrl, id);
// }
//
// export function editNote(id, body) {
//   return buildPutAxios(baseNotesUrl, {
//   	...body,
//     "date_created": Date.now(),
//   });
// }
