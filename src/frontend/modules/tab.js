var Tab = (function(){

  function copyUrl() {
    href = document.location.href;
		Clipboard.copy(href);
    CmdBox.set({ title : "It's copied,the URL: " + href, timeout : 4000 });
  }

  function reload(){
    location.reload();
  }

  function reloadAll() {
		Post({action: "Tab.reloadAll"});
	}

  function close(arg) {
		Post({action: "Tab.close",arguments : arg});
  }

  function reopen() {
		Post({action: "Tab.reopen",num : times()});
	}

  function pin() {
		Post({action: "Tab.update",pinned: true});
  }

  function unpin() {
		Post({action: "Tab.update",pinned: false});
  }

  function selectPrevious() {
    var count = times(/*raw*/ true);

    if (count) {
      Post({ action : "Tab.goto", index : count - 1});
    } else {
      Post({ action : "Tab.selectPrevious" });
    }
  }

  function prev()  { Post({action: "Tab.goto",offset : -1 * times()}); }
  function next()  { Post({action: "Tab.goto",offset : times()}); }
  function first() { Post({action: "Tab.goto",index  :	0}); }
  function last()  { Post({action: "Tab.goto",index  : -1}); }

  // API
	return {
    copyUrl   : copyUrl	 ,
    reload    : reload   ,
    reloadAll : reloadAll,
    close     : close    ,
    reopen    : reopen   ,
    pin       : pin      ,
    unpin     : unpin    ,
    prev      : prev     ,
    next      : next     ,
    first     : first    ,
    last      : last     ,
    selectPrevious : selectPrevious,
		closeAndFoucsLast : function(){ close({focusLast : true}) },
		closeAndFoucsLeft : function(){ close({offset : -1}) },
	}
})()
