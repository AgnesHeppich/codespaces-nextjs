export const revalidate = 0

export async function GET() {
    
    const maratondata = await fetch("https://secure.onreg.com/onreg2/bibexchange/?eventid=6087&language=us")
    const html = await maratondata.text()
    if(html.includes("There are currently no race numbers for sale. Try again later.")) {
      console.log("Det finns inte biljetter")
      // Post to slack
      await fetch("https://hooks.slack.com/services/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", {
        method: "POST",
        body: JSON.stringify({
          text: "Det här är ett test. Ignorera detta"
          
      })})
    }
    return Response.json("hejsan")
  }
