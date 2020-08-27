(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{379:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-fetch-all-remote-branches-in-git-after-cloning-only-a-single-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-fetch-all-remote-branches-in-git-after-cloning-only-a-single-branch"}},[e._v("#")]),e._v(" How to fetch all remote branches in Git after cloning only a single branch")]),e._v(" "),a("DateComponent",{attrs:{page:e.$page}}),e._v(" "),a("p",[e._v("Often I clone only a single commit from one branch of a git repository so that the download will be quick and I can start installing the project. However, after getting the project set up I often want to be able to pull other branches and commits as well. In this post I will show you how to update your git repository to be able to pull other branches and commits after cloning a single branch and commit.")]),e._v(" "),a("p",[e._v("This is how I would normally clone the last commit from a single branch:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("remote-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --depth "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("To enable fetching all branches from the remote, we can update the remote's\nfetch "),a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-Internals-The-Refspec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Refspec"),a("OutboundLink")],1),e._v(". The\nRefspec is what tells git what branches to look for in the remote. We can get\nour remote's current Refspec like this:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config remote.origin.fetch\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The output will be something like:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+refs/heads/<branch-name>:refs/remotes/origin/<branch-name>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("We can update the Refspec to enable fetching all branches like this:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config remote.origin.fetch "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"+refs/heads/*:refs/remotes/origin/*"')]),e._v(" \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("To fetch all of the remote branches, we now need to run:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote update\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("To pull all of the old commits on the branch that we initially cloned, we can run:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch --unshallow\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("We can also use the "),a("a",{attrs:{href:"https://git-scm.com/docs/git-fetch#Documentation/git-fetch.txt---depthltdepthgt",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("--depth")]),e._v("\nargument"),a("OutboundLink")],1),e._v("\ninstead to limit the number of commits to fetch. If we only want to fetch the\nlast 10 commits, we can run:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch --depth "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);