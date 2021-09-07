var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"author:Liuyin"},"\n","\n","^说明：你今天刚从老家来深圳挣钱，在这里会有各种选择，做出合理的选择避免挂壁吧😜",{"#":"CLASS:explain"},"\n","ev","str","^第一章：初到深圳","/str","/ev",{"*":"0.c-0","flg":4},"ev","str","^第二章：入职富土康","/str","/ev",{"*":"0.c-1","flg":4},{"c-0":["^ ",{"#":"CLEAR"},"\n",{"->":"chapter1"},{"->":"0.g-0"},{"#f":5}],"c-1":["^ ",{"#":"CLEAR"},"\n",{"->":"chapter2"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"chapter1":[["^忙完农活，你一个人从老家来到深圳谋生，8小时的大巴让你感觉很累","\n","^“是先找工作还是休息一晚明天再说呢？”","\n","ev","str","^现在就找工作","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"chapter1.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^先休息一天再说",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"1_1"},{"#f":5}],"c-1":["ev",{"^->":"chapter1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"effort"},1,"-",{"VAR=":"effort","re":true},"/ev","ev",{"VAR?":"mood"},1,"+",{"VAR=":"mood","re":true},"/ev",{"->":"1_2"},{"#f":5}]}],{"#f":1}],"1_1":["ev",{"VAR?":"effort"},1,"+",{"VAR=":"effort","re":true},"/ev","ev",{"VAR?":"mood"},1,"-",{"VAR=":"mood","re":true},"/ev","^看了看自己的钱包，还是先挣钱要紧","\n","^你在汽车站一楼逛了一圈，现在工价基本都是20多，这可比在家砍甘蔗挣得多了","\n","^富土康还在大量招人呀，你感叹，这是你三年前第一次打工进的厂，人换了一拨又一拨，但厂还是那个厂，铁打的企业流水的工人","\n","^你本想今天报名进富土康，但今天都已经发完车了，只能明天再进厂","\n",{"->":"1_2"},{"#f":1}],"1_2":[["^于是你往汽车站外走","\n",["ev",{"^->":"1_2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^先去吃个饭吧",{"->":"$r","var":true},null]}],"ev","str","^先找个住的地方","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"1_2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"1_3"},{"#f":5}],"c-1":["\n",{"->":"1_4"},{"#f":5}]}],{"#f":1}],"1_3":["^在汽车站附近花15块点了份猪脚饭吃，你的精神有所恢复，准备找个地方今晚睡一觉","\n",{"->":"1_4"},{"#f":1}],"1_4":[["^路上看到几家旅馆，但最便宜的也要85块，你身上的钱已经不多了","\n",["ev",{"^->":"1_4.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^先住一晚再说 ",{"->":"$r","var":true},null]}],["ev",{"^->":"1_4.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^还是再找找吧",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"1_4.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"1_5"},"\n",{"#f":5}],"c-1":["ev",{"^->":"1_4.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"^,毕竟没啥钱了😭","\n",{"->":"1_6"},{"#f":5}]}],{"#f":1}],"1_5":["^你在旅馆前台花了85开了间房，因为太累，放好行李洗完澡，就开着空调入睡了，迷糊中你似乎听到了雨声","\n","^……","\n","^……","\n","^第二天，你跟着中介的车去了富土康，面试很顺利，但体检费要50","\n","^因为没钱体检，你挂壁了","\n","^温馨提示：出门在外，要时刻注意自己有多少钱哦 ",{"#":"CLASS:tip"},"\n","end",{"#f":1}],"1_6":[["^你走着走着，又回到了汽车站广场，这时有人过来，递给你一张名片","\n","^“靓仔，要床位吗？”","\n","^“多少钱一晚？”","\n","^“25”","\n","^“几人间呀。”","\n","^“12人间，干净卫生。”","\n","ev","str","^不去","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"1_6.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^接过名片，跟老板过去",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"1_8"},{"#f":5}],"c-1":["ev",{"^->":"1_6.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],"\n",{"->":"1_7"},{"#f":5}]}],{"#f":1}],"1_7":["^跟着老板来到了一个房间，里面已经塞满了6张床，还有股刺鼻的味道。你已经心生退意，但确实是疲惫，今晚只能将就将就了。于是将行李放在床上，在其他人的鼾声中睡去","\n","^……","\n","^……","\n","^第二天起床，你发现手机和钱包都被偷走，你挂壁了","\n","^温馨提示：出门在外，要注意自己的财务安全 ",{"#":"CLASS:tip"},"\n","end",{"#f":1}],"1_8":[["^你摇摇头不理老板。但，今晚睡哪里好呢？","\n","^你想起了三年前一起从村里出来的","ev",{"VAR?":"friend"},"out","/ev","\n","^你们进的第一个厂也是富土康","\n","^三年间，你换了一个又一个厂","\n","^而","ev",{"VAR?":"friend"},"out","/ev","^和女朋友在富土康附近租房安了个家","\n",["ev",{"^->":"1_8.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^今晚去","ev",{"VAR?":"friend"},"out","/ev","^家住一晚吧",{"->":"$r","var":true},null]}],["ev",{"^->":"1_8.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^还是自己找地方住吧",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"1_8.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],"\n",{"->":"1_9"},{"#f":5}],"c-1":["ev",{"^->":"1_8.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],"\n",{"->":"1_12"},{"#f":5}]}],{"#f":1}],"1_9":[["^你给","ev",{"VAR?":"friend"},"out","/ev","^打了个语音，他爽快地发了定位过来","\n","^顺着定位来到了","ev",{"VAR?":"friend"},"out","/ev","^的家里","\n","ev",{"VAR?":"friend"},"out","/ev","^的老婆","ev",{"VAR?":"friend_wife"},"out","/ev","^早已准备了不算丰盛的饭菜，桌上还放了两瓶啤酒","\n","^“要来两杯吗？”老友问你","\n","ev","str","^喝两杯","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^不喝了","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"1_10"},{"#f":5}],"c-1":["\n",{"->":"1_11"},{"#f":5}]}],{"#f":1}],"1_10":["^你很感激","ev",{"VAR?":"friend"},"out","/ev","^，于是跟多年的老乡喝起了酒","\n","^...","\n","^在老友家的沙发上睡了一晚","\n","^...","\n","^第二天回到汽车站，跟着中介进了富土康","\n","^在富土康，你顺利地进行了面试体检，当晚住进了富土康的宿舍","\n","^第三天，你接到通知，体检不过，因为体检前一天你喝了酒","\n","^于是你挂壁了😭","\n","^温馨提示：体检前一天不要熬夜喝酒，不要吃辛辣食物哦 ",{"#":"CLASS:tip"},"\n","end",{"#f":1}],"1_11":[["^你很感激","ev",{"VAR?":"friend"},"out","/ev","^，但因为明天要进厂，你只吃饭不喝酒，","ev",{"VAR?":"friend"},"out","/ev","^也表示理解。吃完饭你跟老友回忆往事，因为一天的折腾，你说这说着就睡着了","\n","^……","\n","^……","\n","^第二天回到汽车站，跟着中介进了富土康","\n","^面试体检都很顺利，你开始了在富土康的生活","\n","^第一章挑战成功！👍",{"#":"CLASS:success"},"\n",["ev",{"^->":"1_11.0.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^开启在富土康的生活",{"->":"$r","var":true},null]}],["ev",{"^->":"1_11.0.24.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^结束游戏",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"1_11.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],"\n",{"->":"chapter2"},{"#f":5}],"c-1":["ev",{"^->":"1_11.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.24.s"},[{"#n":"$r2"}],"\n","end",{"#f":5}]}],{"#f":1}],"1_12":["^晚上，n你在公园找了块草地，将背包当作枕头，在蚊子声和车声中艰难入睡","\n","^迷迷糊糊中，你感到湿湿凉凉的","\n","^“卧槽，下雨了”","\n","^你赶紧起来，找个屋檐躲雨，一夜无眠","\n","^……","\n","^……","\n","^第二天，你跟着中介的车去了富土康，面试很顺利，体检费要50，幸好你昨晚没花钱住宿，身上还有点钱做体检。","\n","^第三天，体检结果出来，因为你前一天晚上没睡好，导致体检不及格","\n","^于是你挂壁了😭","\n","^温馨提示：体检前一天不要熬夜喝酒，不要吃辛辣食物哦 ",{"#":"CLASS:tip"},"\n","end",{"#f":1}],"chapter2":["^还没填坑","\n","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"effort"},0,{"VAR=":"mood"},"str","^张三","/str",{"VAR=":"friend"},"str","^翠花","/str",{"VAR=":"friend_wife"},"/ev","end",null],"#f":1}],"listDefs":{}};