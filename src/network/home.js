import {request} from "./request";

export function getHomeMulData() {
  return request({
    url: '/home/multidata'
  })
}
