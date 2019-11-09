const axios = require("axios");

export default ({ examId, header }) => {
  const authHeaders = {
    Authorization: header
  };

  return axios
    .get(`/api/v1/exam/exam/front/exam-paper`, {
      params: {
        examId: examId
      },
      headers: authHeaders
    })
    .then(({ data }) => {
      let examRecordId = data.examRecord.id;

      return axios.get(`/api/v1/exam/exam/front/score-detail`, {
        params: {
          examRecordId: examRecordId
        },
        headers: authHeaders
      });
    })
    .then(({ data }) => {
      return data.paper.questions;
    })
    .catch(e => {
      window.alert(e);
    });
};
