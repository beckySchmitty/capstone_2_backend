"use strict";

const Bechdel = require("./Bechdel.js");

describe("get by title works", function () {


  test("works for harry", async function (done) {
    let resp = await Bechdel.getMoviesByTitle("harry");

    expect(resp[0]).not.toBe(0);
    expect(resp[0].title).toBe("When Harry Met Sally");
    expect(resp[2].title).toBe("Harry Potter and the Chamber of Secrets");
    expect(resp[4].title).toContain("Goblet of Fire")
    done();
  });

  test("bad request with empty term", async function (done) {
    let resp = await Bechdel.getMoviesByTitle("");
    expect(resp.rows).toBeUndefined()
    done();
  });

});


