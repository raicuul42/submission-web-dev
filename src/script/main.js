function main() {
  const baseURL = "https://doa-doa-api-ahmadramadhan.fly.dev";
  const Axios = require("axios");

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  const getAllDoa = async () => {
    try {
      const response = await Axios.get(`${baseURL}/api`);

      if (response.error) {
        showResponseMessage(response.message);
      } else {
        renderAllDoa(response.data);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const renderAllDoa = (data) => {
    const listDoaElement = document.querySelector("#listDoa");
    listDoaElement.innerHTML = "";

    data.forEach((dataDoa) => {
      listDoaElement.innerHTML += `
            <div class="col">
                <div class="card h-100">
                    <div class="card-header">${dataDoa.id}. ${dataDoa.doa}</div>
                    <div class="card-body">
                        <blockquote class="blockquote">
                            <p class="mb-4">${dataDoa.ayat} <br><br> ${dataDoa.latin}</p>
                            <footer class="blockquote-footer mt-3">${dataDoa.artinya}</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
            `;
    });
  };

  getAllDoa();
}

export default main;
