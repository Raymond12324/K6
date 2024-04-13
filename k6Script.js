// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/urijs.js";
import { group } from "k6";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  collection: {
    endpoint: "https://swapi.dev/api"
  }
});

export default function() {
  group("Films", function() {
    postman[Request]({
      name: "List",
      id: "b74b6f80-9340-4920-b11f-aefc6c3d5068",
      method: "GET",
      address: "{{endpoint}}/films"
    });

    postman[Request]({
      name: "Film",
      id: "30210c02-5b07-4193-abc1-cd0016c6204c",
      method: "GET",
      address: "{{endpoint}}/films/1/"
    });
  });

  group("People", function() {
    postman[Request]({
      name: "List",
      id: "6bce833c-b55a-40ce-8285-400da78adb54",
      method: "GET",
      address: "{{endpoint}}/people"
    });

    postman[Request]({
      name: "Person",
      id: "46d420e8-ee74-495f-8697-e95771b43920",
      method: "GET",
      address: "{{endpoint}}/people/1/"
    });
  });

  group("Planets", function() {
    postman[Request]({
      name: "List",
      id: "f6136d2f-e99f-4a85-a7a7-1c4cf250f382",
      method: "GET",
      address: "{{endpoint}}/planets"
    });

    postman[Request]({
      name: "Planet",
      id: "3a7c06e9-50f9-4567-980b-2c32ade2dac2",
      method: "GET",
      address: "{{endpoint}}/planets/1/"
    });
  });

  group("Starships", function() {
    postman[Request]({
      name: "List",
      id: "3e86fabb-ca9b-4375-831b-5908f378bf09",
      method: "GET",
      address: "{{endpoint}}/starships"
    });

    postman[Request]({
      name: "Starship",
      id: "d3dc7fee-114d-4cd6-b3a4-7a260509fc76",
      method: "GET",
      address: "{{endpoint}}/starships/2/"
    });
  });

  group("Species", function() {
    postman[Request]({
      name: "List",
      id: "6bd74c64-a9f2-4ba9-b0dc-88731f080f41",
      method: "GET",
      address: "{{endpoint}}/species"
    });

    postman[Request]({
      name: "Specie",
      id: "ee6ca140-be22-40fe-8cd6-18054fbf0b3f",
      method: "GET",
      address: "{{endpoint}}/species/1/"
    });
  });

  group("Vehicles", function() {
    postman[Request]({
      name: "List",
      id: "d4c5d3e6-f9d6-43a5-af15-a3ae18a3541e",
      method: "GET",
      address: "{{endpoint}}/vehicles"
    });

    postman[Request]({
      name: "Vehicle",
      id: "9b475972-34cb-47b5-ad7c-90c48a2bf4a1",
      method: "GET",
      address: "{{endpoint}}/vehicles/4/"
    });
  });

  postman[Request]({
    name: "Resources",
    id: "989cb3ea-46ff-446c-9dc3-5fa50482fc7a",
    method: "GET",
    address: "{{endpoint}}"
  });
}
