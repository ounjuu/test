// 테이블 생성
const tableWrap = document.querySelector(".main-wrap");
tableWrap.innerHTML = `
                <div class="table">
                  <div class="tablehead">
                    <div class="thead">
                      <div class="theadname">
                        <div>이름</div>
                        <div>나이</div>
                        <div>경력사항</div>
                        <div>별명</div>
                        <div>관리</div>
                      </div>
                    </div>
                    <div class="tablebody">
                    </div>
                  </div>
                  <div class="textbox1"></div>
                </div>
                  `;

let data = [];

//   // 수정버튼 if문 끝
// };

// const allCheckFunction = (id, type) => {
//   const docu = document.querySelector(
//     `${
//       type === "name"
//         ? ".name" + id
//         : type === "age"
//         ? ".age" + id
//         : ".years" + id
//     }`
//   );

//   // 코멘트 담을거
//   let comment;

//   if (type === "age") {
//     // 나이일떄
//     if (docu.value >= 150) {
//       comment = `<div>150이하로 작성해 주세요.</div>`;
//     } else {
//       comment = ``;
//     }
//   } else {
//     if (docu.length < 15) {
//       comment = `<div>15자 이상 작성해 주세요.</div>`;
//     }
//   }
// };

function aaa() {
  // 데이터 원래꺼 없으면 로컬 스토리지 내용 테이블에 넣기
  const dataAll = data.map((x, i) => {
    return `
                <tr>
                  <td>${x.name}</td>
                  <td>${x.age}</td>
                  <td class="years${x.id}">${x.year}</td>
                  <td>${x.char}</td>
                  <td><button class="fixbtn${x.id}" onclick="fixclick(${x.id})" >수정</button><button class="deletebtn${x.id}" onclick="deleteclick(${x.id})" >삭제</button></td>
                </tr>`;
  });
  const tablebody = document.querySelector(".tablebody");
  tablebody.innerHTML = dataAll.join("");

  document.querySelector(".idbox").innerText = "";
  document.querySelector(".namebox").innerText = "";
  document.querySelector(".namebox").innerText = "";
  document.querySelector(".yearbox").innerText = "";
  document.querySelector(".charbox").innerText = "";
}
