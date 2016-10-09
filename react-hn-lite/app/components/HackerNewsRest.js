/* global fetch */
import 'isomorphic-fetch';
import log from 'loglevel';

const END_POINT = 'https://hacker-news.firebaseio.com/v0';

function storyRef(path) {
  log.trace(`fetch story ${path}`);
  return fetch(`${END_POINT}/${path}.json`);
}

function itemRef(id) {
  log.trace(`fetch item ${id}`);
  return fetch(`${END_POINT}/item/${id}.json`);
}

export {
  storyRef,
  itemRef
};
