/*
    This file was auto-generated by genioc tool

    ----

    Do NOT manually edit it!

    ----

    To update this file with newer dependencies - run:

    $ genioc

    or 

    $ genioc --watch

    to continuously watch after files
*/

import { AbstractContainer } from "../src";

export type GeneratedDependencyToken = "IUserRepository";

const Container = new AbstractContainer<GeneratedDependencyToken>(
  {
  "UserRepository": [],
  "UserService": [
    "IUserRepository"
  ]
}
);

export default Container;
