const axios = require("axios");
const fs = require("fs");

const examId = "d0fc6249-6510-4f9c-83ff-134c69fb57a3";

const authHeaders = {
  Authorization: "Bearer__252b25fb62ef7cfd3d33726afbcdfa6d"
}


axios.get(
  `https://wangda.andedu.net/api/v1/exam/exam/front/exam-paper`,
  {
    params: {
      examId: examId
    },
    headers: authHeaders
  }
).then( ({ data }) => {
  let examRecordId = data.examRecord.id;

  return axios.get(
    `https://wangda.andedu.net/api/v1/exam/exam/front/score-detail`,
    {
      params: {
        examRecordId: examRecordId
      },
      headers: authHeaders
    }
  )
} ).then( ({data}) => {
  fs.writeFileSync("./data.json", JSON.stringify(data.paper.questions))
  console.log(JSON.stringify(data.paper.questions)  )
} )
