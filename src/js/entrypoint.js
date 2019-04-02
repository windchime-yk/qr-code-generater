import qrcode from 'qrcode';

const qrdraw = document.getElementById('qrdraw');
const geneBtn = document.getElementById('generateBtn');
const saveBtn = document.getElementById('saveBtn');

geneBtn.addEventListener('click', () => {
  const geneVal = document.getElementById('inputUrl').value;
  if(geneVal === '') {
    alert('URLを入力してください');
  } else if(geneVal.match(/\.js$|\.zip$/g)) {
    alert('無効なURLです');
  } else {
    qrcode.toCanvas(qrdraw, geneVal, error => {
      if(error) console.error(error);
      else if(!error) alert('作成に成功しました');
    });
    const imgData = qrdraw.toDataURL('image/png');
    saveBtn.href = imgData;
  }
});