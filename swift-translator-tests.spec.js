const { test, expect } = require("@playwright/test");


const CONFIG = {
  url: "https://www.swifttranslator.com/",
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000,
  },
  selectors: {
    inputField: "Input Your Singlish Text Here.",
    outputContainer:
      "div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap",
  },
};
// Test Data
const TEST_DATA = {
  positive: [
    {
      tcId: "Pos_Fun_0001",
      name: "Convert a short daily greeting phrase",
      input: "oyaa hodhindha ?",
      expected: "ඔයා හොදින්ද?",
      length: "S",
      status: "Fail",
      
    },
    {
      tcId: "Pos_Fun_0002",
      name: "Long mixed-language input with slang + type causes incorrect conversion",
      input: "machan mama dhaen gedhara aavee. oyaata puluvandha mata udhavvak karanna",
      expected: "මචන් මම දැන් ගෙදර ආවේ. ඔයාට පුලුවන්ද මට උදව්වක් කරන්න",
      length: "M",
      status: "Pass",
     
    },
    {
      tcId: "Pos_Fun_0003",
      name: "Convert a short request phrase",
      input: "mama bus ekee gedhara yannadha?",
      expected: "මම bus එකේ ගෙදර යන්නද?",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0007",
      name: "Convert a long message requesting explanation via call",
      input: "oyaa call karoth mama hariyata explain karannam,mokadha mata hithenavaa message ekakin okkoma details theerum karanna amaaru veyi kiyalaa. mama internet eketh balannam amathara karuNu hoyaa ganna puluvan veyidha kiyalaa ",
      expected: "ඔයා call කරොත් මම හරියට explain කරන්නම්,මොකද මට හිතෙනවා message එකකින් ඔක්කොම details තේරුම් කරන්න අමාරු වෙයි කියලා. මම internet එකෙත් බලන්නම් අමතර කරුණු හොයා ගන්න පුලුවන් වෙයිද කියලා",
      length: "M",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0008",
      name: "Convert a short daily question phrase",
      input: "mee link eka hariyata open venavadha?",
      expected: "මේ link එක හරියට open වෙනවද?",
      length: "S",
      status: "Pass",
     
    },
    {
      tcId: "Pos_Fun_0009",
      name: "Convert a short imperative command",
      input: "vahaama enna.",
      expected: "වහාම එන්න.",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0011",
      name: "Convert a present tense daily activity sentence with mixed English",
      input: "api adha raeeta koththu kanavaa",
      expected: "අපි අද රෑට koththu කනවා",
      length: "S",
      status: "Fail",
     
    },
    {
      tcId: "Pos_Fun_0013",
      name: "Convert a short polite request sentence",
      input: "suBha udhaeesanak",
      expected: "සුභ උදෑසනක්",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0014",
      name: "Convert a short question about location",
      input: "oyaa kohedha inne",
      expected: "ඔයා කොහෙද ඉන්නේ",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0015",
      name: "Convert a casual affirmative sentence with future tense",
      input: "ov, Api heta nuvara eLiyee yanavaa",
      expected: "ov, අපි හෙට නුවරඑළියේ යනවා",
      length: "S",
      status: "Fail",
      
    },
    {
      tcId: "Pos_Fun_0016",
      name: "Convert an apology sentence with informal tone",
      input: "samaavennamamaadhapoddakparakkuunaa",
      expected: "සමාවෙන්න මම අද පොඩ්ඩක්පරක්කුඋනා",
      length: "S",
      status: "Fail",
     
    },
    {
      tcId: "Pos_Fun_0017",
      name: "Convert an informal imperative command",
      input: "ooka dhaen submit karapan",
      expected: "ඕක දැන් submit කරපන්",
      length: "S",
      status: "Fail",
     
    },
    {
      tcId: "Pos_Fun_0018",
      name: "Convert a directional suggestion sentence",
      input: "api mee paara dhigeema issarahata yamu",
      expected: "අපි මේ පාර දිගේම ඉස්සරහට යමු",
      length: "S",
      status: "Pass",
     
    },
    {
      tcId: "Pos_Fun_0019",
      name: "Convert an explanatory sentence about future academic commitmente",
      input: "final exam iilaGA maasee nisaa mee dhavas vala hariyata vaeda",
      expected: "final exam ඊලඟ මාසේ නිසා මේ දවස් වල හරියට වැඩ",
      length: "S",
      status: "Pass",
     
    },
    {
      tcId: "Pos_Fun_0020",
      name: "Convert a long compound sentence describing future plans ",
      input: "apihetagameeyanavaaachchibalanna.eyaa ledavelaainne.apiennee thavadhavasthunakinvithara.eenisaaapienakangevalhodhinbalaaganna",
      expected: "අපි හෙට ගමේ යනවා අච්චි බලන්න. එයා ලෙඩ වෙලා ඉන්නේ. අපි එන්නේ තව දවස් තුනකින් විතර. ඒ නිසා අපි එනකන් ගෙවල් හොදින් බලා ගන්න",
      length: "M",
      status: "Fail",
      
    },
    {
      tcId: "Pos_Fun_0021",
      name: "Convert a short sentence with number format",
      input: "api dhennaa mee raakkaya clean karamu. oyaata puLuvandha mata piGan tika tika aran dhenna",
      expected: "api dhennaa මේ රාක්කය clean කරමු. ඔයාට පුළුවන්ද මට පිඟන් ටික ටික අරන් දෙන්න",
      length: "S",
      status: "Fail",
      
    },
    {
      tcId: "Pos_Fun_0023",
      name: "Convert a simple past tense travel experience sentence",
      input: "api giya avurudhdhee siriipaadhe giyaa",
      expected: "අපි ගිය අවුරුද්දේ සිරීපාදෙ ගියා",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0024",
      name: "Convert present continuous academic activity sentence",
      input: " mama dhaen assignment eka karanavaa",
      expected: "මම දැන් assignment එක කරනවා",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0025",
      name: "Convert a future plan statement",
      input: "api iiLaGA avurudhdhee car ekak gannavaa",
      expected: "අපි ඊළඟ අවුරුද්දේ car එකක් ගන්නවා",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0026",
      name: "Convert a long explanatory negative response with reasons",
      input: "mama adha enne naehae,mokadha mata hariyata nidhimathayi saha adha udhaeesanen passe meeting ekak dhaalaa thiyanavaa kiyalaa office eken message ekak aavaa, eeka nisaa api passe dhavasaka hamu unoth hari kiyalaa mata hithenavaa",
      expected: "මම අද එන්නෙ නැහැ,මොකද මට හරියට නිදිමතයි සහ අද උදෑසනෙන් පස්සෙ meeting එකක් දාලා තියනවා කියලා office එකෙන් message එකක් ආවා, ඒක නිසා අපි පස්සෙ දවසක හමු උනොත් හරි කියලා මට හිතෙනවා",
      length: "L",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0027",
      name: "Convert a simple sentence",
      input: "mama adha pansal yanavaa  puujaavak thiyanna",
      expected: "මම අද පන්සල් යනවා  පූජාවක් තියන්න",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0028",
      name: "Convert a simple inclusive suggestion sentence",
      input: "api adha pansal yamu",
      expected: "අපි අද පන්සල් යමු",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0029",
      name: "convert simple sentence",
      input: "karuNaakaralaa mata podi udhavvak karanna puLuvandha?",
      expected: "කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0030",
      name: "Convert a  question sentence",
      input: "mata WiFi hariyata vaeda karannee naehae mokadha apee gedhara internet connection eka godak weak uNa nisaa, eka nisaa adha udhee thibuna Zoom meeting ekata join venna baeri unaa saha office eken evalaa thibuna important email tika hariyata load venne naee kiyala mata theerenavaa, ehema una nisaa mama whatsapp valin manager ta message ekak dhaala situation eka explain karalaa iita psse office yanna hithan inne  ",
      expected: " WiFi හරියට වැඩ කරන්නේ නැහැ මොකද අපේ ගෙදරinternet connection එක ගොඩක් weak උණ නිසා, එක නිසා අද උදේ තිබුන Zoom meeting එකට join වෙන්න බැරි උනා සහ office එකෙන් එවලා තිබුන important email ටික හරියට load වෙන්නෙ නෑ කියල මට තේරෙනවා, එහෙම උන නිසා මම whatsapp වලින් manager ට message එකක් දාල situationඑක explainකරලයට psse office yanna hithan inne  ",
      length: "L",
      status: "Fail",
      
    },
    {
      tcId: "Pos_Fun_0031",
      name: "Convert a complex sentence with place and common English words",
      input:
        "Lamayi adha school yannee vaeen ekee mokadha adha udhaeesanin passe bus strike ekak thiyenavaa",
      expected:
        "ළමයි අද school යන්නේ වෑන් එකේ මොකද අද උදෑසනින් පස්සෙ bus strike එකක් තියෙනවා.",
      length: "M",
      status: "Fail",
      
    },
    {
      tcId: "Pos_Fun_0032",
      name: "Convert a sentence with English abbreviations and instructional content",
      input: "registration eka complete karaama ID@ eka saha NIC copy ekak upload karanna kiyalaa course web ekee instruction thiyanavaa",
      expected: "registration එක complete කරාම ID එක සහ NIC copy එකක් upload කරන්න කියලා course web එකේ instruction තියනවා",
      length: "M",
      status: "Fail",
      
    },
    {
      tcId: "Pos_Fun_0033",
      name: "Convert a sentence containing date, time, currency, and measurement units",
      input: "mama doctor appointment eka 25/12/2025 dhina 10.00 AM ta confirm karala thiyenavaa, payment ekata Rs. 1500 dhenna oona, medicine 5 ml dosage ekak daily ganna kiyala instructions thibbaa.",
      expected: "මම doctor appointment එක 25/12/2025 දින 10.00 AM ට confirm කරල තියෙනවා, payment එකට Rs. 1500 දෙන්න ඕන, medicine 5 ml dosage එකක් daily ගන්න කියල instructions තිබ්බා.",
      length: "L",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0034",
      name: "Convert a simple imperative sentence with multiple spaces",
      input: " api   pansal    yamu",
      expected: "අපි   පන්සල්    යමු",
      length: "S",
      status: "Pass",
     
    },
    {
      tcId: "Pos_Fun_0035",
      name: "Convert a sentence with line breaks and spacing variations",
      input: "mama gedhara yadhdhi oyaata kiyannam",
      expected: "මම ගෙදර යද්දි ඔයාට කියන්නම්",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Pos_Fun_0036",
      name: "Convert a slang-based informal expression with punctuation",
      input: "ah, eka godak lassanayi bQQ!  ",
      expected: "අහ්, එක ගොඩක් ලස්සනයි බං!",
      length: "S",
      status: "Pass",
      
    },
  ],

  negative: [
    {
      tcId: "Neg_Fun_0010",
      name: "Convert a negative sentence",
      input: "api midhula athu gaannee naee",
      expected: "අපි මිදුල අතු ගාන්නේ නෑ",
      length: "S",
      status: "Pass",
      
    },
    {
      tcId: "Neg_Fun_0012",
      name: "Convert a negative present tense daily activity sentence",
      input: "api adha raeeta bath kannee naehae",
      expected: "අපි අද රෑට බත් කන්නේ නැහැ",
      length: "S",
      status: "Pass",
     
    },
  ],

  ui: [
    {
      tcId: "Pos_UI_0004",
      name: "Sinhala output updates automatically in real-time",
      input: "mama kadeeta yanavaa",
      expectedFull: "මම කඩේට යනවා",
      length: "S",
      status: "Pass",
     
    },
    {
      tcId: "Pos_UI_0005",
      name: "Convert a short daily activity sentence",
      input: "mama pansalata yanavaa",
      expectedFull: "මම පන්සලට යනවා",
      length: "S",
      status: "pass",
      
    },
    {
      tcId: "Pos_UI_0006",
      name: "Convert a compound daily activity sentence",
      input: "mama adha university ekata kalin yanna haedhuve namuth vaessa nisaa late unaa",
      expectedFull: "මම අද university එකට කලින් යන්න හැදුවෙ නමුත් වැස්ස නිසා late උනා",
      length: "M",
      status: "pass",
      
    },
    {
      tcId: "Pos_UI_0022",
      name: "Convert a casual explanatory household activity sentence",
      input: "api redhi tika hoodhalaa vaelen dhaamu avva thiyana  nisaa hodhata veeleevi",
      expectedFull: "අපි රෙදි ටික හෝදලා වැලෙන් දාමු අව්ව තියන  නිසා හොදට වේලේවි",
      length: "M",
      status: "pass",
      
    },
  ],
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole("textbox", { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator("textarea") })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll(
            ".w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap"
          )
        );
        const output = elements.find((el) => {
          const isInputField =
            el.tagName === "TEXTAREA" || el.getAttribute("role") === "textbox";
          return (
            !isInputField && el.textContent && el.textContent.trim().length > 0
          );
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );

    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return (text || "").trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Utility: generate a reasonable partial input for UI tests (for "type as you go")
function makePartialInput(fullInput) {
  const clean = (fullInput || "").trim();
  if (clean.length <= 4) return clean;
  // Take first ~1/3 (min 6 chars) but avoid cutting in the middle of multi-byte issue (safe in JS strings)
  const len = Math.min(Math.max(6, Math.floor(clean.length / 3)), 12);
  return clean.slice(0, len);
}

// Test Suite
test.describe("SwiftTranslator - Singlish to Sinhala Conversion Tests", () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe("Positive Functional Tests", () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe("Negative Functional Tests", () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Functionality Tests (Real-time / incremental typing)
  test.describe("UI Functionality Tests", () => {
    for (const uiCase of TEST_DATA.ui) {
      test(`${uiCase.tcId} - ${uiCase.name}`, async ({ page }) => {
        const tp = new TranslatorPage(page);
        const input = await tp.getInputField();
        const output = await tp.getOutputField();

        await tp.clearAndWait();

        const partial = makePartialInput(uiCase.input);

        // Type partial input
        await input.pressSequentially(partial, { delay: 150 });

        // Wait a bit for partial output
        await page.waitForTimeout(1500);

        // Verify partial translation appears (non-empty)
        let outputText = await output.textContent();
        expect((outputText || "").trim().length).toBeGreaterThan(0);

        // Complete typing
        const remaining = uiCase.input.substring(partial.length);
        if (remaining.length > 0) {
          await input.pressSequentially(remaining, { delay: 150 });
        }

        // Wait for full translation and assert it matches expected full output
        await tp.waitForOutput();
        outputText = await tp.getOutputText();
        expect(outputText).toBe(uiCase.expectedFull);

        await page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });
});
