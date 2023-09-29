(()=>{"use strict";class t{constructor(){this.projects=[]}get projects(){return this._projects}set projects(t){this._projects=t}validateProjectTitle(t){for(let e=0;e<this.projects.length;e++)if(t==this.projects[e]._title)return!1;return!0}addProject(t){this.projects.push(t)}addTaskToProject(t,e){this.projects[e]._tasks.push(t)}}class e{constructor(t){this.title=t,this.tasks=[]}get title(){return this._title}get tasks(){return this._tasks}set title(t){this._title=t}set tasks(t){this._tasks=t}}class n{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}set title(t){this._title=t}set description(t){this._description=t}set dueDate(t){this._dueDate=t}set priority(t){this._priority=t}}Math.pow(10,8);var o=36e5;function i(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t,e){var n;i(1,arguments);var a=function(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}(null!==(n=null==e?void 0:e.additionalDigits)&&void 0!==n?n:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var h,C=function(t){var e,n={},o=t.split(s.dateTimeDelimiter);if(o.length>2)return n;if(/:/.test(o[0])?e=o[0]:(n.date=o[0],e=o[1],s.timeZoneDelimiter.test(n.date)&&(n.date=t.split(s.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var i=s.timezone.exec(e);i?(n.time=e.replace(i[1],""),n.timezone=i[1]):n.time=e}return n}(t);if(C.date){var _=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),o=t.match(n);if(!o)return{year:NaN,restDateString:""};var i=o[1]?parseInt(o[1]):null,a=o[2]?parseInt(o[2]):null;return{year:null===a?i:100*a,restDateString:t.slice((o[1]||o[2]).length)}}(C.date,a);h=function(t,e){if(null===e)return new Date(NaN);var n=t.match(r);if(!n)return new Date(NaN);var o=!!n[4],i=c(n[1]),a=c(n[2])-1,s=c(n[3]),d=c(n[4]),l=c(n[5])-1;if(o)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,d,l)?function(t,e,n){var o=new Date(0);o.setUTCFullYear(t,0,4);var i=7*(e-1)+n+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+i),o}(e,d,l):new Date(NaN);var p=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(u[e]||(m(t)?29:28))}(e,a,s)&&function(t,e){return e>=1&&e<=(m(t)?366:365)}(e,i)?(p.setUTCFullYear(e,a,Math.max(i,s)),p):new Date(NaN)}(_.restDateString,_.year)}if(!h||isNaN(h.getTime()))return new Date(NaN);var g,k=h.getTime(),j=0;if(C.time&&(j=function(t){var e=t.match(d);if(!e)return NaN;var n=p(e[1]),i=p(e[2]),a=p(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,i,a)?n*o+6e4*i+1e3*a:NaN}(C.time),isNaN(j)))return new Date(NaN);if(!C.timezone){var v=new Date(k+j),b=new Date(0);return b.setFullYear(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate()),b.setHours(v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds(),v.getUTCMilliseconds()),b}return g=function(t){if("Z"===t)return 0;var e=t.match(l);if(!e)return 0;var n="+"===e[1]?-1:1,i=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(i*o+6e4*a):NaN}(C.timezone),isNaN(g)?new Date(NaN):new Date(k+j+g)}var s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},r=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(t){return t?parseInt(t):1}function p(t){return t&&parseFloat(t.replace(",","."))||0}var u=[31,null,31,30,31,30,31,31,30,31,30,31];function m(t){return t%400==0||t%4==0&&t%100!=0}function h(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function _(t){i(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===C(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function g(t){i(1,arguments);var e=_(t);return e.setHours(0,0,0,0),e}function k(t,e){i(2,arguments);var n=g(t),o=g(e),a=n.getTime()-h(n),s=o.getTime()-h(o);return Math.round((a-s)/864e5)}function j(t){return i(1,arguments),_(t).getMonth()}let v=new class{constructor(){this.todoContainer=new t,this.selectedProjectIndex}get todoContainer(){return this._todoContainer}get selectedProjectIndex(){return this._selectedProjectIndex}set todoContainer(t){this._todoContainer=t}set selectedProjectIndex(t){this._selectedProjectIndex=t}getLocalStorage(){if(null!=JSON.parse(localStorage.getItem("todo"))){let t=JSON.parse(localStorage.getItem("todo"));this.todoContainer.projects=t._projects}}storeLocalStorage(){localStorage.clear();let t=JSON.stringify(this.todoContainer);localStorage.setItem("todo",t)}addNewProject(t){let n=new e(t);this.todoContainer.validateProjectTitle(t)?this.todoContainer.addProject(n):alert("Project already exists with the entered title.")}removeProject(t){this.todoContainer._projects.splice(t,1),this.storeLocalStorage(),location.reload()}addNewTask(t){let e=new n(t.title,t.description,t.dueDate,t.priority);this.todoContainer.addTaskToProject(e,this.selectedProjectIndex)}removeTask(t,e){this.todoContainer._projects[t]._tasks.splice(e,1),this.storeLocalStorage()}};const b=(()=>{let t=document.getElementById("projects-container"),e=document.getElementById("add-project-button"),n=document.getElementById("todo-container");const o=()=>{let t=document.createElement("div");t.setAttribute("id","task-list-container"),n.appendChild(t)},i=()=>{let t=document.getElementById("task-list-container");t.innerHTML="";for(let e=0;e<v._todoContainer._projects[v._selectedProjectIndex]._tasks.length;e++){let n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),d=document.createElement("button"),l=document.createElement("button"),c=document.createElement("button"),p=document.createElement("img"),u=document.createElement("img"),m=document.createElement("img");p.src="../dist/icons/dots.svg",u.src="../dist/icons/edit.svg",m.src="../dist/icons/close.svg",n.classList.add("task-container"),"1"==v._todoContainer._projects[v._selectedProjectIndex]._tasks[e]._priority?n.classList.add("high-priority"):"2"==v._todoContainer._projects[v._selectedProjectIndex]._tasks[e]._priority?n.classList.add("medium-priority"):n.classList.add("low-priority"),o.classList.add("task-container-title"),a.classList.add("task-container-date"),d.classList.add("task-control-button"),l.classList.add("task-control-button"),c.classList.add("task-control-button"),r.classList.add("task-button-container"),o.textContent=v._todoContainer._projects[v._selectedProjectIndex]._tasks[e]._title,a.textContent=v._todoContainer._projects[v._selectedProjectIndex]._tasks[e]._dueDate,d.appendChild(p),l.appendChild(u),c.appendChild(m),d.addEventListener("click",(()=>{n.classList.toggle("bigger-task-container");let t=document.createElement("div");t.textContent="Description:",t.classList.add("task-container-description");let o=document.createElement("div");""==v._todoContainer._projects[v._selectedProjectIndex]._tasks[e]._description?o.textContent="No description assigned for this task.":o.textContent=v._todoContainer._projects[v._selectedProjectIndex]._tasks[e]._description,o.classList.add("task-container-description-box"),5==n.childNodes.length?(n.removeChild(n.lastChild),n.removeChild(n.lastChild)):4==n.childNodes.length?(n.classList.toggle("edit-task-container"),n.removeChild(n.lastChild),n.appendChild(t),n.appendChild(o)):(n.appendChild(t),n.appendChild(o))})),l.addEventListener("click",(()=>{n.classList.toggle("edit-task-container");let t=document.createElement("div");t.classList.add("task-container-edit-form-container");let o=`<label for="task-title-${e}">Title:</label>\n                        <input type="text" id="task-title-${e}" class="form-input"><br>\n                        <label for="task-description-${e}">Description:</label>\n                        <input type="text" id="task-description-${e}" class="form-input" placeholder="(optional)"><br>\n                        <label for="task-date-${e}">Due Date:</label>\n                        <input type="date" id="task-date-${e}" class="form-input"><br>\n                        <label for="task-priority-${e}">Priority:</label>\n                        <select id="task-priority-${e}" class="form-input">\n                            <option value="3">Low</option>\n                            <option value="2">Medium</option>\n                            <option value="1">High</option>\n                        </select>`;t.innerHTML=o;let i=document.createElement("div"),a=document.createElement("button"),s=document.createElement("button");a.textContent="Edit",s.textContent="Cancel",i.setAttribute("id","control-buttons-container"),a.classList.add("task-buttons"),s.classList.add("task-buttons"),a.classList.add("submit"),s.classList.add("cancel"),i.appendChild(a),i.appendChild(s),t.appendChild(i),4==n.childNodes.length?n.removeChild(n.lastChild):5==n.childNodes.length?(n.classList.toggle("bigger-task-container"),n.removeChild(n.lastChild),n.removeChild(n.lastChild),n.appendChild(t)):n.appendChild(t)})),l.addEventListener("click",(()=>{s(e)})),c.addEventListener("click",(()=>{v.removeTask(v._selectedProjectIndex,e),i()})),r.appendChild(d),r.appendChild(l),r.appendChild(c),n.appendChild(o),n.appendChild(a),n.appendChild(r),t.appendChild(n)}if(0==t.childNodes.length){let e=document.createElement("h2");e.textContent="There are no tasks assigned for this project.",e.classList.add("task-message"),t.appendChild(e)}},s=t=>{let e=document.getElementById(`task-title-${t}`),n=document.getElementById(`task-description-${t}`),o=document.getElementById(`task-date-${t}`),i=document.getElementById(`task-priority-${t}`);e.value=v._todoContainer._projects[v._selectedProjectIndex]._tasks[t]._title,n.value=v._todoContainer._projects[v._selectedProjectIndex]._tasks[t]._description,o.value=v._todoContainer._projects[v._selectedProjectIndex]._tasks[t]._dueDate,i.value=v._todoContainer._projects[v._selectedProjectIndex]._tasks[t]._priority},r=()=>{let t=document.createElement("button"),e=document.createElement("img");e.src="../dist/icons/plus.svg",e.classList.add("add-task-icon"),t.appendChild(e),t.setAttribute("id","add-task-button"),t.innerHTML+="Add Task",t.addEventListener("click",d),n.appendChild(t)},d=()=>{l();let t=document.getElementById("add-task-button");t.disabled=!0;let e=document.createElement("div"),o=document.createElement("div"),a=document.createElement("button"),s=document.createElement("button");e.setAttribute("id","add-task-container"),e.innerHTML='<label for="task-title">Title:</label>\n                        <input type="text" id="task-title" class="form-input"><br>\n                        <label for="task-description">Description:</label>\n                        <input type="text" id="task-description" class="form-input" placeholder="(optional)"><br>\n                        <label for="task-date">Due Date:</label>\n                        <input type="date" id="task-date" class="form-input"><br>\n                        <label for="task-priority">Priority:</label>\n                        <select id="task-priority" class="form-input">\n                            <option value="3">Low</option>\n                            <option value="2">Medium</option>\n                            <option value="1">High</option>\n                        </select>',a.textContent="Submit",s.textContent="Cancel",o.setAttribute("id","control-buttons-container"),a.classList.add("task-buttons"),s.classList.add("task-buttons"),a.classList.add("submit"),s.classList.add("cancel"),a.addEventListener("click",(()=>{let o={};o.title=document.getElementById("task-title").value,o.description=document.getElementById("task-description").value,o.dueDate=document.getElementById("task-date").value,o.priority=document.getElementById("task-priority").value,""!=o.title?""!=o.dueDate?(v.addNewTask(o),v.storeLocalStorage(),t.disabled=!1,n.removeChild(e),l(),i()):alert("Please select the due date for the task."):alert("Please enter the title of the task.")})),s.addEventListener("click",(()=>{t.disabled=!1,n.removeChild(e),l()})),o.appendChild(a),o.appendChild(s),e.appendChild(o),n.appendChild(e)},l=()=>{n.classList.toggle("todo-container-simple"),n.classList.toggle("todo-container-adding-task")};return{loadHome:()=>{n.innerHTML="",o();let t=document.getElementById("task-list-container"),e=document.createElement("h2");e.textContent='"All Tasks"',e.setAttribute("id","home-page-title"),n.appendChild(e);for(let e=0;e<v.todoContainer._projects.length;e++)for(let n=0;n<v.todoContainer._projects[e]._tasks.length;n++){let o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div");o.classList.add("home-task-list-container"),"1"==v._todoContainer._projects[e]._tasks[n]._priority?o.classList.add("high-priority"):"2"==v._todoContainer._projects[e]._tasks[n]._priority?o.classList.add("medium-priority"):o.classList.add("low-priority"),i.textContent=v.todoContainer._projects[e]._tasks[n]._title,a.textContent=v.todoContainer._projects[e]._tasks[n]._dueDate,s.textContent="Project: "+v.todoContainer._projects[e]._title,o.appendChild(i),o.appendChild(a),o.appendChild(s),t.appendChild(o)}if(0==t.childNodes.length){let e=document.createElement("h2");e.textContent="All projects are empty. No tasks have been assigned.",e.classList.add("task-message"),t.appendChild(e)}},loadToday:()=>{n.innerHTML="",o();let t=document.getElementById("task-list-container"),e=document.createElement("h2");e.textContent='"Tasks with due date of Today"',e.setAttribute("id","home-page-title"),n.appendChild(e);for(let e=0;e<v.todoContainer._projects.length;e++)for(let n=0;n<v.todoContainer._projects[e]._tasks.length;n++)if(0==k(a(v.todoContainer._projects[e]._tasks[n]._dueDate),new Date)){let o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div");o.classList.add("home-task-list-container"),"1"==v._todoContainer._projects[e]._tasks[n]._priority?o.classList.add("high-priority"):"2"==v._todoContainer._projects[e]._tasks[n]._priority?o.classList.add("medium-priority"):o.classList.add("low-priority"),i.textContent=v.todoContainer._projects[e]._tasks[n]._title,a.textContent=v.todoContainer._projects[e]._tasks[n]._dueDate,s.textContent="Project: "+v.todoContainer._projects[e]._title,o.appendChild(i),o.appendChild(a),o.appendChild(s),t.appendChild(o)}},loadThisWeek:()=>{n.innerHTML="",o();let t=document.getElementById("task-list-container"),e=document.createElement("h2");e.textContent='"Tasks with due date of This week"',e.setAttribute("id","home-page-title"),n.appendChild(e);for(let e=0;e<v.todoContainer._projects.length;e++)for(let n=0;n<v.todoContainer._projects[e]._tasks.length;n++){var i=a(v.todoContainer._projects[e]._tasks[n]._dueDate);if(k(i,new Date)<=7&&k(i,new Date)>=0){let o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div");o.classList.add("home-task-list-container"),"1"==v._todoContainer._projects[e]._tasks[n]._priority?o.classList.add("high-priority"):"2"==v._todoContainer._projects[e]._tasks[n]._priority?o.classList.add("medium-priority"):o.classList.add("low-priority"),i.textContent=v.todoContainer._projects[e]._tasks[n]._title,a.textContent=v.todoContainer._projects[e]._tasks[n]._dueDate,s.textContent="Project: "+v.todoContainer._projects[e]._title,o.appendChild(i),o.appendChild(a),o.appendChild(s),t.appendChild(o)}}},loadThisMonth:()=>{n.innerHTML="",o();let t=document.getElementById("task-list-container"),e=document.createElement("h2");e.textContent='"Tasks with due date of This month"',e.setAttribute("id","home-page-title"),n.appendChild(e);let i=j(new Date);for(let e=0;e<v.todoContainer._projects.length;e++)for(let n=0;n<v.todoContainer._projects[e]._tasks.length;n++)if(i==j(a(v.todoContainer._projects[e]._tasks[n]._dueDate))){let o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div");o.classList.add("home-task-list-container"),"1"==v._todoContainer._projects[e]._tasks[n]._priority?o.classList.add("high-priority"):"2"==v._todoContainer._projects[e]._tasks[n]._priority?o.classList.add("medium-priority"):o.classList.add("low-priority"),i.textContent=v.todoContainer._projects[e]._tasks[n]._title,a.textContent=v.todoContainer._projects[e]._tasks[n]._dueDate,s.textContent="Project: "+v.todoContainer._projects[e]._title,o.appendChild(i),o.appendChild(a),o.appendChild(s),t.appendChild(o)}},addProjectInput:()=>{e.disabled=!0;let n=document.createElement("div"),o=document.createElement("input"),i=document.createElement("button"),a=document.createElement("button"),s=document.createElement("img"),r=document.createElement("img");n.setAttribute("id","project-input-container"),o.setAttribute("id","project-input-field"),i.classList.add("project-buttons"),i.classList.add("submit"),a.classList.add("project-buttons"),a.classList.add("cancel"),o.placeholder="Enter project name...",s.src="../dist/icons/check.svg",r.src="../dist/icons/close.svg",i.addEventListener("click",(()=>{v.addNewProject(o.value),t.removeChild(n),e.disabled=!1,v.storeLocalStorage(),location.reload()})),a.addEventListener("click",(()=>{t.removeChild(n),e.disabled=!1})),i.appendChild(s),a.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(a),t.appendChild(n)},generateProjects:()=>{for(let e=0;e<v.todoContainer._projects.length;e++){let n=document.createElement("div"),o=document.createElement("button"),i=document.createElement("button"),a=document.createElement("img");a.src="../dist/icons/close.svg",o.textContent=v.todoContainer._projects[e]._title,o.setAttribute("id",v.todoContainer._projects[e]._title),n.classList.add("project-container-item"),o.classList.add("project-selector-button"),a.classList.add("remove-project-button"),i.addEventListener("click",(()=>{v.removeProject(e)})),i.appendChild(a),n.appendChild(o),n.appendChild(i),t.appendChild(n)}},generateProjectButtons:()=>{for(let t=0;t<v._todoContainer._projects.length;t++)document.getElementById(`${v._todoContainer._projects[t]._title}`).addEventListener("click",(()=>{var e;e=t,n.innerHTML="",v._selectedProjectIndex=e,r(),o(),i()}))}}})();v.getLocalStorage(),console.log(v.todoContainer),b.loadHome(),b.generateProjects(),b.generateProjectButtons(),document.getElementById("home-button").addEventListener("click",b.loadHome),document.getElementById("today-button").addEventListener("click",b.loadToday),document.getElementById("week-button").addEventListener("click",b.loadThisWeek),document.getElementById("month-button").addEventListener("click",b.loadThisMonth),document.getElementById("add-project-button").addEventListener("click",b.addProjectInput)})();