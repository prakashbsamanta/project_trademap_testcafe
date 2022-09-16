const { Selector, ClientFunction } = require("testcafe");

const fourDigits = [
  "0301",
  "0302",
  "0303",
  "0304",
  "0304",
  "0305",
  "0306",
  "0307",
  "0308",
  "0309",
];

const countries = [
  "-2",
  "004",
  "577",
  "008",
  "012",
  "636",
  "016",
  "020",
  "024",
  "660",
  "028",
  "899",
  "032",
  "051",
  "533",
  "946",
  "036",
  "040",
  "031",
  "044",
  "048",
  "050",
  "052",
  "112",
  "056",
  "084",
  "204",
  "060",
  "064",
  "068",
  "535",
  "070",
  "072",
  "074",
  "076",
  "080",
  "086",
  "092",
  "096",
  "100",
  "854",
  "108",
  "132",
  "116",
  "120",
  "124",
  "129",
  "136",
  "471",
  "140",
  "148",
  "152",
  "156",
  "162",
  "166",
  "170",
  "174",
  "178",
  "180",
  "184",
  "188",
  "384",
  "191",
  "192",
  "531",
  "196",
  "203",
  "208",
  "262",
  "212",
  "214",
  "221",
  "218",
  "818",
  "222",
  "226",
  "232",
  "233",
  "748",
  "231",
  "697",
  "568",
  "492",
  "238",
  "234",
  "242",
  "246",
  "251",
  "838",
  "258",
  "260",
  "266",
  "270",
  "268",
  "276",
  "288",
  "292",
  "300",
  "304",
  "308",
  "316",
  "320",
  "324",
  "624",
  "328",
  "332",
  "340",
  "344",
  "348",
  "352",
  "699",
  "360",
  "364",
  "368",
  "372",
  "376",
  "381",
  "388",
  "392",
  "400",
  "398",
  "404",
  "296",
  "408",
  "410",
  "414",
  "417",
  "473",
  "418",
  "428",
  "422",
  "426",
  "430",
  "434",
  "440",
  "442",
  "446",
  "807",
  "450",
  "454",
  "458",
  "462",
  "466",
  "470",
  "584",
  "478",
  "480",
  "175",
  "484",
  "583",
  "498",
  "496",
  "499",
  "500",
  "504",
  "508",
  "104",
  "516",
  "520",
  "524",
  "528",
  "530",
  "536",
  "540",
  "554",
  "558",
  "562",
  "566",
  "570",
  "574",
  "290",
  "637",
  "580",
  "579",
  "527",
  "512",
  "586",
  "585",
  "275",
  "591",
  "598",
  "600",
  "604",
  "608",
  "612",
  "616",
  "620",
  "634",
  "642",
  "643",
  "646",
  "654",
  "659",
  "662",
  "666",
  "670",
  "882",
  "678",
  "682",
  "686",
  "688",
  "891",
  "690",
  "837",
  "694",
  "702",
  "534",
  "703",
  "705",
  "090",
  "706",
  "710",
  "728",
  "724",
  "839",
  "144",
  "729",
  "736",
  "740",
  "752",
  "757",
  "760",
  "490",
  "762",
  "834",
  "999",
  "764",
  "626",
  "768",
  "772",
  "776",
  "780",
  "788",
  "792",
  "795",
  "796",
  "798",
  "800",
  "804",
  "784",
  "826",
  "849",
  "842",
  "858",
  "860",
  "548",
  "862",
  "704",
  "876",
  "879",
  "732",
  "887",
  "894",
  "716",
];
fixture`Test structure`
  .page`https://www.trademap.org/Index.aspx`.skipJsErrors();

// test("Login", async (t) => {
//   await t.click(Selector(`[id="ctl00_MenuControl_Label_Login"]`));
//   // const hideElement = ClientFunction((targetId) => {
//   //   document.querySelector(targetId).style.display = "none";
//   // });
//   // await hideElement(`[id="ReturnUrl"]`);

//   // await t.setCookies(
//   //   { apiCookie1: "value1" },
//   //   "https://www.trademap.org/Country_SelProductCountry_TS.aspx?nvpm=1%7c842%7c%7c%7c%7c0306%7c%7c%7c4%7c1%7c1%7c1%7c2%7c1%7c2%7c1%7c1%7c1"
//   // );
//   // await t.debug();
//   await t.wait(5000);
//   await t.debug();
//   await t
//     // .setNativeDialogHandler(null)
//     .click(Selector(`[id="Username"]`))
//     .typeText(Selector(`[id="Username"]`), "prakash.s@captainfresh.in");

//   await t.wait(5000);
//   await t.click(Selector(`[id="Password"]`));
//   await t.typeText(Selector(`[id="Password"]`), "*HGD2z2vb6Cs");
//   await t.wait(5000);
//   await t.click(Selector(`[value="login"]`));
//   await t.wait(5000);
// });

// for (let digit of fourDigits) {
for (let country of countries) {
  test.meta({ productCode: "0301" })(
    `Trying to download data for 0301 with country code: ${country}`,
    async (t) => {
      await t.navigateTo(
        "https://www.trademap.org/Country_SelProductCountry_TS.aspx?nvpm=1%7c842%7c%7c%7c%7c0301%7c%7c%7c4%7c1%7c1%7c1%7c2%7c1%7c2%7c1%7c1%7c1"
      );
      await t.maximizeWindow();
      await t.wait(5000);

      await t.click(
        Selector(`[id="ctl00_NavigationControl_DropDownList_Product"]`)
      );
      await t.wait(5000);
      await t.click(
        Selector(
          `#ctl00_NavigationControl_DropDownList_Product > option`
        ).withAttribute("value", "03")
      );
      await t.wait(5000);

      await t.click(
        Selector(`[id="ctl00_NavigationControl_DropDownList_Product"]`)
      );
      await t.wait(5000);

      await t.click(
        Selector(
          `#ctl00_NavigationControl_DropDownList_Product > option`
        ).withAttribute("value", "0301")
      );
      await t.wait(5000);

      await t.click(
        Selector(`[id="ctl00_NavigationControl_DropDownList_Country"]`)
      );
      await t.wait(5000);
      await t.click(
        Selector(
          `#ctl00_NavigationControl_DropDownList_Country > option`
        ).withAttribute("value", country)
      );
      await t.wait(5000);
      await t.click(
        Selector(
          `[id="ctl00_PageContent_GridViewPanelControl_ImageButton_ExportExcel"]`
        )
      );
      await t.wait(5000);
      console.log(
        `Excel for country with code: ${country} probably got downloaded, go check your downloads directory! Good luck 🤞🏼`
      );
    }
  );

  test.only.meta({ productCode: "0302" })(
    `Trying to download data for 0302 with country code: ${country}`,
    async (t) => {
      await t.navigateTo(
        "https://www.trademap.org/Country_SelProductCountry_TS.aspx?nvpm=1%7c052%7c%7c%7c%7c0302%7c%7c%7c4%7c1%7c1%7c1%7c2%7c1%7c2%7c1%7c1%7c1"
      );
      await t.maximizeWindow();
      await t.wait(5000);

      await t.click(
        Selector(`[id="ctl00_NavigationControl_DropDownList_Product"]`)
      );
      await t.wait(5000);
      await t.click(
        Selector(
          `#ctl00_NavigationControl_DropDownList_Product > option`
        ).withAttribute("value", "03")
      );
      await t.wait(5000);

      await t.click(
        Selector(`[id="ctl00_NavigationControl_DropDownList_Product"]`)
      );
      await t.wait(5000);

      await t.click(
        Selector(
          `#ctl00_NavigationControl_DropDownList_Product > option`
        ).withAttribute("value", "0302")
      );
      await t.wait(5000);

      await t.click(
        Selector(`[id="ctl00_NavigationControl_DropDownList_Country"]`)
      );
      await t.wait(5000);
      await t.click(
        Selector(
          `#ctl00_NavigationControl_DropDownList_Country > option`
        ).withAttribute("value", country)
      );
      await t.wait(5000);
      await t.click(
        Selector(
          `[id="ctl00_PageContent_GridViewPanelControl_ImageButton_ExportExcel"]`
        )
      );
      await t.wait(5000);
      console.log(
        `Excel for country with code: ${country} probably got downloaded, go check your downloads directory! Good luck 🤞🏼`
      );
    }
  );

  test.meta({ productCode: "0303" })(
    `Trying to download data for 0303 with country code: ${country}`,
    async (t) => {
      await t.navigateTo(
        "https://www.trademap.org/Country_SelProductCountry_TS.aspx?nvpm=1%7c842%7c%7c%7c%7c0303%7c%7c%7c4%7c1%7c1%7c1%7c2%7c1%7c2%7c1%7c1%7c1"
      );
      await t.maximizeWindow();
      await t.wait(5000);

      await t.click(
        Selector(`[id="ctl00_NavigationControl_DropDownList_Product"]`)
      );
      await t.wait(5000);
      await t.click(
        Selector(
          `#ctl00_NavigationControl_DropDownList_Product > option`
        ).withAttribute("value", "03")
      );
      await t.wait(5000);

      await t.click(
        Selector(`[id="ctl00_NavigationControl_DropDownList_Product"]`)
      );
      await t.wait(5000);

      await t.click(
        Selector(
          `#ctl00_NavigationControl_DropDownList_Product > option`
        ).withAttribute("value", "0303")
      );
      await t.wait(5000);

      await t.click(
        Selector(`[id="ctl00_NavigationControl_DropDownList_Country"]`)
      );
      await t.wait(5000);
      await t.click(
        Selector(
          `#ctl00_NavigationControl_DropDownList_Country > option`
        ).withAttribute("value", country)
      );
      await t.wait(5000);
      await t.click(
        Selector(
          `[id="ctl00_PageContent_GridViewPanelControl_ImageButton_ExportExcel"]`
        )
      );
      await t.wait(5000);
      console.log(
        `Excel for country with code: ${country} probably got downloaded, go check your downloads directory! Good luck 🤞🏼`
      );
    }
  );
}

// }
