(()=>{"use strict";class t{constructor(){this.projects=[]}get projects(){return this._projects}set projects(t){this._projects=t}validateProjectTitle(t){for(let e=0;e<this.projects.length;e++)if(t==this.projects[e]._title)return!1;return!0}addProject(t){this.projects.push(t)}addTaskToProject(t,e){this.projects[e]._tasks.push(t)}}class e{constructor(t){this.title=t,this.tasks=[]}get title(){return this._title}get tasks(){return this._tasks}set title(t){this._title=t}set tasks(t){this._tasks=t}}class n{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}set title(t){this._title=t}set description(t){this._description=t}set dueDate(t){this._dueDate=t}set priority(t){this._priority=t}}let o=new class{constructor(){this.todoContainer=new t,this.selectedProjectIndex}get todoContainer(){return this._todoContainer}get selectedProjectIndex(){return this._selectedProjectIndex}set todoContainer(t){this._todoContainer=t}set selectedProjectIndex(t){this._selectedProjectIndex=t}getLocalStorage(){if(null!=JSON.parse(localStorage.getItem("todo"))){let t=JSON.parse(localStorage.getItem("todo"));this.todoContainer.projects=t._projects}}storeLocalStorage(){localStorage.clear();let t=JSON.stringify(this.todoContainer);localStorage.setItem("todo",t)}addNewProject(t){let n=new e(t);this.todoContainer.validateProjectTitle(t)?this.todoContainer.addProject(n):alert("Project already exists with the entered title.")}removeProject(t){this.todoContainer._projects.splice(t,1),this.storeLocalStorage(),location.reload()}addNewTask(t){let e=new n(t.title,t.description,t.dueDate,t.priority);this.todoContainer.addTaskToProject(e,this.selectedProjectIndex)}};const s=(()=>{let t=document.getElementById("projects-container"),e=document.getElementById("add-project-button"),n=document.getElementById("todo-container");const s=t=>{if(n.innerHTML="",o._selectedProjectIndex=t,a(),0==o._todoContainer._projects[t]._tasks.length){let t=document.createElement("h2");t.textContent="There are no assigned tasks in this project.",t.classList.add("task-message"),n.appendChild(t)}else d(),i()},d=()=>{let t=document.createElement("div");t.setAttribute("id","task-list-container"),n.appendChild(t)},i=()=>{let t=document.getElementById("task-list-container");t.innerHTML="";for(let e=0;e<o._todoContainer._projects[o._selectedProjectIndex]._tasks.length;e++){let n=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),a=document.createElement("button"),r=document.createElement("button"),c=document.createElement("button"),l=document.createElement("img"),p=document.createElement("img"),u=document.createElement("img");l.src="../dist/icons/dots.svg",p.src="../dist/icons/edit.svg",u.src="../dist/icons/close.svg",n.classList.add("task-container"),s.classList.add("task-container-title"),d.classList.add("task-container-date"),a.classList.add("task-control-button"),r.classList.add("task-control-button"),c.classList.add("task-control-button"),i.classList.add("task-button-container"),s.textContent=o._todoContainer._projects[o._selectedProjectIndex]._tasks[e]._title,d.textContent=o._todoContainer._projects[o._selectedProjectIndex]._tasks[e]._dueDate,a.appendChild(l),r.appendChild(p),c.appendChild(u),i.appendChild(a),i.appendChild(r),i.appendChild(c),n.appendChild(s),n.appendChild(d),n.appendChild(i),t.appendChild(n)}},a=()=>{let t=document.createElement("button"),e=document.createElement("img");e.src="../dist/icons/plus.svg",e.classList.add("add-task-icon"),t.appendChild(e),t.setAttribute("id","add-task-button"),t.innerHTML+="Add Task",t.addEventListener("click",r),n.appendChild(t)},r=()=>{c();let t=document.getElementById("add-task-button");t.disabled=!0;let e=document.createElement("div"),s=document.createElement("div"),d=document.createElement("button"),a=document.createElement("button");e.setAttribute("id","add-task-container"),e.innerHTML='<label for="task-title">Title:</label>\n                        <input type="text" id="task-title" class="form-input"><br>\n                        <label for="task-description">Description:</label>\n                        <input type="text" id="task-description" class="form-input"><br>\n                        <label for="task-date">Due Date:</label>\n                        <input type="date" id="task-date" class="form-input"><br>\n                        <label for="task-priority">Priority:</label>\n                        <select id="task-priority" class="form-input">\n                            <option value="3">Low</option>\n                            <option value="2">Medium</option>\n                            <option value="1">High</option>\n                        </select>',d.textContent="Submit",a.textContent="Cancel",s.setAttribute("id","control-buttons-container"),d.classList.add("task-buttons"),a.classList.add("task-buttons"),d.classList.add("submit"),a.classList.add("cancel"),d.addEventListener("click",(()=>{let s={};s.title=document.getElementById("task-title").value,s.description=document.getElementById("task-description").value,s.dueDate=document.getElementById("task-date").value,s.priority=document.getElementById("task-priority").value,o.addNewTask(s),o.storeLocalStorage(),t.disabled=!1,n.removeChild(e),c(),i()})),a.addEventListener("click",(()=>{t.disabled=!1,n.removeChild(e),c()})),s.appendChild(d),s.appendChild(a),e.appendChild(s),n.appendChild(e)},c=()=>{n.classList.toggle("todo-container-simple"),n.classList.toggle("todo-container-adding-task")};return{addProjectInput:()=>{e.disabled=!0;let n=document.createElement("div"),s=document.createElement("input"),d=document.createElement("button"),i=document.createElement("button"),a=document.createElement("img"),r=document.createElement("img");n.setAttribute("id","project-input-container"),s.setAttribute("id","project-input-field"),d.classList.add("project-buttons"),d.classList.add("submit"),i.classList.add("project-buttons"),i.classList.add("cancel"),s.placeholder="Enter project name...",a.src="../dist/icons/check.svg",r.src="../dist/icons/close.svg",d.addEventListener("click",(()=>{o.addNewProject(s.value),t.removeChild(n),e.disabled=!1,o.storeLocalStorage(),location.reload()})),i.addEventListener("click",(()=>{t.removeChild(n),e.disabled=!1})),d.appendChild(a),i.appendChild(r),n.appendChild(s),n.appendChild(d),n.appendChild(i),t.appendChild(n)},generateProjects:()=>{for(let e=0;e<o.todoContainer._projects.length;e++){let n=document.createElement("div"),s=document.createElement("button"),d=document.createElement("button"),i=document.createElement("img");i.src="../dist/icons/close.svg",s.textContent=o.todoContainer._projects[e]._title,s.setAttribute("id",o.todoContainer._projects[e]._title),n.classList.add("project-container-item"),s.classList.add("project-selector-button"),i.classList.add("remove-project-button"),d.addEventListener("click",(()=>{o.removeProject(e)})),d.appendChild(i),n.appendChild(s),n.appendChild(d),t.appendChild(n)}},generateProjectButtons:()=>{for(let t=0;t<o._todoContainer._projects.length;t++)document.getElementById(`${o._todoContainer._projects[t]._title}`).addEventListener("click",(()=>{s(t)}))}}})();o.getLocalStorage(),console.log(o.todoContainer),s.generateProjects(),s.generateProjectButtons(),document.getElementById("add-project-button").addEventListener("click",s.addProjectInput)})();