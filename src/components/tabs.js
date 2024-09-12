import axios from 'axios'



  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  
  const Tabs = (topics) => {
    let mainDiv = document.createElement("div");
 	mainDiv.classList.add("topics");
 	topics.forEach((topic) => {
 		const topicDiv = document.createElement("div");
 		mainDiv.append(topicDiv);
 		topicDiv.classList.add("tab");
 		topicDiv.textContent = topic;
 	});

 	return mainDiv;
 };

const tabsAppender = (selector) => {
  // TASK 4
  axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((res) => {
    document.querySelector(selector).appendChild(Tabs(res.data.topics));
    console.log(document.querySelector(selector))
  })
  .catch((err) => {
    console.log("something went wrong", err);
  });
}

export { Tabs, tabsAppender }
