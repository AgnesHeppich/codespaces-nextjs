export async function GET(request) {
    
  const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')
    const maratondata = await fetch("https://secure.onreg.com/onreg2/bibexchange/?eventid=6087&language=us")
    const html = await maratondata.text()
    if(!html.includes("There are currently no race numbers for sale. Try again later.")) {
      console.log("Det finns biljetter")
      // Post to slack
      fetch("https://hooks.slack.com/services/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", {
        method: "POST",
        body: JSON.stringify({
          text: "Det finns biljetter bror, walla. Köpa fan, sälj beggat. Paya jacke!"
          
      })})
    }
    return Response.json("hejsan")
  }