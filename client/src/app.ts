async function getcontent(url:string) {
  const response = await fetch(url);
  return await response.json();
}
async function run_app(){
  const body = document.querySelector('body');
  if (!body)
    return
  body.textContent = await getcontent('/get_list');
}
run_app()