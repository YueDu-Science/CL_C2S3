/**************** 
 * Cl_C2S3 Test *
 ****************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'CL_C2S3';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  text: "Welcome. Make sure you type in your 'participation ID' and 'session number', then press 'Ok' to continue.",
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const Import_FileLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Import_FileLoopBegin, Import_FileLoopScheduler);
flowScheduler.add(Import_FileLoopScheduler);
flowScheduler.add(Import_FileLoopEnd);
const Instr_Exp_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Instr_Exp_BoolLoopBegin, Instr_Exp_BoolLoopScheduler);
flowScheduler.add(Instr_Exp_BoolLoopScheduler);
flowScheduler.add(Instr_Exp_BoolLoopEnd);
const RT_Bool_HandLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RT_Bool_HandLoopBegin, RT_Bool_HandLoopScheduler);
flowScheduler.add(RT_Bool_HandLoopScheduler);
flowScheduler.add(RT_Bool_HandLoopEnd);
const TR_Bool_HandLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TR_Bool_HandLoopBegin, TR_Bool_HandLoopScheduler);
flowScheduler.add(TR_Bool_HandLoopScheduler);
flowScheduler.add(TR_Bool_HandLoopEnd);
const CR_Old_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CR_Old_BoolLoopBegin, CR_Old_BoolLoopScheduler);
flowScheduler.add(CR_Old_BoolLoopScheduler);
flowScheduler.add(CR_Old_BoolLoopEnd);
const CR_New_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(CR_New_BoolLoopBegin, CR_New_BoolLoopScheduler);
flowScheduler.add(CR_New_BoolLoopScheduler);
flowScheduler.add(CR_New_BoolLoopEnd);
const RT_Old_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RT_Old_BoolLoopBegin, RT_Old_BoolLoopScheduler);
flowScheduler.add(RT_Old_BoolLoopScheduler);
flowScheduler.add(RT_Old_BoolLoopEnd);
const RT_New_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(RT_New_BoolLoopBegin, RT_New_BoolLoopScheduler);
flowScheduler.add(RT_New_BoolLoopScheduler);
flowScheduler.add(RT_New_BoolLoopEnd);
const TR_Old_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TR_Old_BoolLoopBegin, TR_Old_BoolLoopScheduler);
flowScheduler.add(TR_Old_BoolLoopScheduler);
flowScheduler.add(TR_Old_BoolLoopEnd);
const TR_New_BoolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TR_New_BoolLoopBegin, TR_New_BoolLoopScheduler);
flowScheduler.add(TR_New_BoolLoopScheduler);
flowScheduler.add(TR_New_BoolLoopEnd);
flowScheduler.add(Instr_End_ExpRoutineBegin());
flowScheduler.add(Instr_End_ExpRoutineEachFrame());
flowScheduler.add(Instr_End_ExpRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'media/dcnb.png', 'path': './media/dcnb.png'},
    {'name': 'media/dfnb.png', 'path': './media/dfnb.png'},
    {'name': 'media/hand.png', 'path': './media/hand.png'},
    {'name': 'conditions.xlsx', 'path': './conditions.xlsx'},
    {'name': 'media/dknb.png', 'path': './media/dknb.png'},
    {'name': 'media/check.png', 'path': './media/check.png'},
    {'name': 'media/cross.png', 'path': './media/cross.png'}
  ]
  });

var frameDur;
function updateInfo() {
  const browser = detectBrowser(); // detect browser

  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;
  expInfo['browser'] = browser;
  expInfo['browserInfo'] = window.navigator.userAgent;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

// customized functions needed
Array.prototype.append = [].push

/// define a permutation function
function permute(permutation) {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

var Import_Stim_FileClock;
var block_type;
var participant;
var session;
var circle_frame_color;
var circle_frame_opacity;
var circle_color;
var circle_opacity;
var circle_pol;
var circle_wd;
var ctx_wd;
var ctx_opacity;
var ctx_size;
var feedback_size;
var pre_trial_dur;
var post_trial_dur;
var time_limit;
var too_late_tol;
var num_pos;
var num_symb;
var num_ctx;
var x;
var x2;
var x_hand;
var x2_hand;
var ctx_color_all;
var ctx_color_list;
var ctx_list;
var num_key;
var stim_key;
var stim_key_perm;
var n_map;
var rt_block_hand;
var tr_block_hand;
var num_per_pos;
var num_trials_hand;
var num_trials_cr;
var num_criterion;
var num_per_symb;
var num_trials;
var remap;
var instr_exp;
var hand_rt;
var hand_tr;
var cr_old;
var cr_new;
var rt_old;
var rt_new;
var rt_old_block;
var rt_new_block;
var tr_old;
var tr_new;
var tr_old_block;
var tr_new_block;
var timing_tol_early;
var timing_tol_late;
var tr_feedback_text;
var tr_penalty_text;
var StimList;
var hand_shape;
var x_pos;
var y_pos;
var finger;
var stim;
var ctx_color;
var image;
var key_num;
var ctx_color_remap;
var ctx_remap;
var grp;
var rng;
var prep_time_range;
var prep_time_ind_tmp;
var prep_time_ind;
var num;
var sample_num;
var seq_stim;
var seq_finger;
var seq_image;
var seq_ctx;
var count;
var rng1;
var rng2;
var rng3;
var rnd;
var prep_time_interval;
var Instr_ExpClock;
var Instr_Exp_Text;
var Instr_Exp_Key;
var Instr_RT_HandClock;
var Instr_RT_Hand_Rext;
var Instr_RT_Hand_Key;
var Creat_StimSeqClock;
var Pre_TrialClock;
var Pre_Trial_Circle_Frame;
var Pre_Trial_HandShape;
var RT_Enter_Trial_HandClock;
var RT_Circle_Frame_Hand;
var RT_Press_Hand;
var RT_HandShape;
var RT_Stim_Hand;
var RT_FeedbackClock;
var RT_Circle_Frame_Feedback;
var RT_Feedback_Image;
var Post_TrialClock;
var Post_Trial_Circle_Frame;
var Post_Trial_HandShape;
var Instr_TR_HandClock;
var instr_HAND_TR_text;
var Instr_HAND_TR_press;
var Instr_Block_NumClock;
var Instr_Block_Num_Text;
var Instr_Block_Num_Press;
var TR_Enter_Trials_HandClock;
var TR_Circle_Hand;
var TR_Circle_Frame_Hand;
var TR_HandShape;
var TR_Stim_Hand;
var TR_Press_Hand;
var TR_FeedbackClock;
var Tr_Circle_Frame_Feedback;
var TR_Feedback_Text;
var TR_Feedback_Image;
var TR_PenaltyClock;
var TR_Circle_Frame_Penalty;
var TR_Penalty_Text;
var TR_Penalty_Press;
var TR_Hand_Accuracy_BoolClock;
var Instr_CR_OldClock;
var Instr_CR_Old_Text;
var Instr_CR_Old_Press;
var RT_Enter_TrialClock;
var RT_Circle_Fame;
var RT_Ctx;
var RT_Stim_Image;
var RT_Press;
var Criterion_DetClock;
var Instr_CR_NewClock;
var Instr_CR_New_Text;
var Instr_CR_New_Press;
var Instr_RT_OldClock;
var Instr_RT_Old_Text;
var Instr_RT_Old_Press;
var Instr_RT_NewClock;
var Instr_RT_New_Text;
var Instr_RT_New_Press;
var Instr_TR_OldClock;
var Instr_TR_Old_Text;
var Instr_TR_Old_Press;
var TR_Enter_TrialsClock;
var TR_Circle_Frame;
var TR_Circle;
var TR_Ctx;
var TR_Stim_Image;
var TR_Press;
var Instr_TR_NewClock;
var Instr_TR_New_Text;
var Instr_TR_New_Press;
var Instr_End_ExpClock;
var Instr_End_Exp_Text;
var Instr_End_Exp_Key;
var globalClock;
var routineTimer;
function experimentInit() {

  document.body.style.cursor='none';
  // Initialize components for Routine "Import_Stim_File"
  Import_Stim_FileClock = new util.Clock();
  
   
  block_type = [];
  participant = Number.parseInt(expInfo["participant"]);
  session = Number.parseInt(expInfo["session"]);
  circle_frame_color = [1, 1, 1];
  circle_frame_opacity = 0.5;
  circle_color = [1, 1, 1];
  circle_opacity = 1;
  circle_pol = 1600;
  circle_wd = 12;
  ctx_wd = 0;
  ctx_opacity = 0.5;
  ctx_size = 0.291;
  feedback_size = [0.18, 0.18];
  pre_trial_dur = 0.1;
  post_trial_dur = 0.1;
  time_limit = 1.5;
  too_late_tol = 0.2;
  num_pos = 3;
  num_symb = 3;
  num_ctx = 2;
  x = [];
  x2 = [];
  x_hand = [];
  x2_hand = [];
  for (var i = 0, _pj_a = (num_symb * num_ctx); (i < _pj_a); i += 1) {
      x.push(i);
  }
  x2 = x.concat(x);
  for (var i = 0, _pj_a = num_pos; (i < _pj_a); i += 1) {
      x_hand.push(i);
  }
  x2_hand = x_hand.concat(x_hand);
  ctx_color_all = [[1, (- 1), (- 1)], [(- 1), 1, (- 1)]];
  ctx_color_list = [];
  ctx_list = [];
  for (var i = 0, _pj_a = num_ctx; (i < _pj_a); i += 1) {
      ctx_list.push((i + 1));
  }
  num_key = 3;
  stim_key = [];
  for (var i = 0, _pj_a = num_key; (i < _pj_a); i += 1) {
      stim_key.push(i);
  }
  stim_key_perm = permute(stim_key);
  n_map = stim_key_perm.length;
  rt_block_hand = 1;
  tr_block_hand = 4;
  num_per_pos = 20;
  num_trials_hand = (num_per_pos * num_pos);
  num_trials_cr = 2000;
  num_criterion = 5;
  num_per_symb = 20;
  num_trials = ((num_per_symb * num_symb) * num_ctx);
  remap = 0;
  instr_exp = 0;
  hand_rt = 0;
  hand_tr = 0;
  cr_old = 0;
  cr_new = 0;
  rt_old = 0;
  rt_new = 0;
  rt_old_block = 0;
  rt_new_block = 0;
  tr_old = 0;
  tr_new = 0;
  tr_old_block = 0;
  tr_new_block = 0;
  if ((session === 1)) {
      instr_exp = 1;
      hand_rt = 1;
      hand_tr = 1;
      cr_old = 1;
      cr_new = 0;
      rt_old = 1;
      rt_new = 0;
      rt_old_block = 5;
      rt_new_block = 0;
      tr_old = 1;
      tr_new = 0;
      tr_old_block = 6;
      tr_new_block = 0;
  } else {
      if (session === 2 || session === 4 || session === 6 || session === 8 || session === 10) {
          rt_old = 1;
          rt_old_block = 10;
      } else {
          if (session === 3 || session === 5 || session === 7 || session === 9 || session === 11) {
              rt_old = 1;
              rt_old_block = 5;
              tr_old = 1;
              tr_old_block = 6;
          } else {
            if (session === 12) {
                rt_old = 1;
                rt_old_block = 2;
                cr_new = 1;
                tr_new = 1;
                tr_new_block = 6;
            }
          } 
      } 
  }
  timing_tol_early = 0.1;
  timing_tol_late = 0.075;
  StimList = [];
  hand_shape = [];
  x_pos = [];
  y_pos = [];
  finger = [];
  stim = [];
  ctx_color = [];
  image = [];
  key_num = [];
  ctx_color_remap = [];
  ctx_remap = [];

  var myrng = new Math.seedrandom(participant);   //use new here so it does not affect Math.random()
  rng1 = myrng();
  rng2 = myrng();
  rng3 = myrng();

  grp = 0;
  
  if ((rng1 < 0.5)) {
      grp = 1;
  } else {
      grp = 2;
  }

  prep_time_range = [0, 1.2];
  prep_time_ind_tmp = [];
  prep_time_ind = [];
  sample_num = [1, 3, 3, 4, 4, 3, 2];
  for (var i = 0; i<sample_num.length; ++i) {
    let LEN = sample_num[i];
    let tmp = new Array(LEN).fill(i);
    prep_time_ind_tmp = prep_time_ind_tmp.concat(tmp);
  }

  count = 0;
  while ((count < (num_symb * num_ctx))) {
       util.shuffle(prep_time_ind_tmp);
      prep_time_ind.push(prep_time_ind_tmp.slice(0));
      count = (count + 1);
  }
  prep_time_interval = [[(- 0.5), (- 0.3)], [prep_time_range[0], 0.2], [0.2, 0.4], [0.4, 0.6], [0.6, 0.8], [0.8, 1], [1, prep_time_range[1]]];
  
  // Initialize components for Routine "Instr_Exp"
  Instr_ExpClock = new util.Clock();
  Instr_Exp_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Exp_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Instr_Exp_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr_RT_Hand"
  Instr_RT_HandClock = new util.Clock();
  Instr_RT_Hand_Rext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_RT_Hand_Rext',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  Instr_RT_Hand_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Pre_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Pre_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pre_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "RT_Enter_Trial_Hand"
  RT_Enter_Trial_HandClock = new util.Clock();
  RT_Circle_Frame_Hand = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Circle_Frame_Hand', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Press_Hand = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  RT_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  RT_Stim_Hand = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Stim_Hand', units : 'height', 
    edges: 32, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "RT_Feedback"
  RT_FeedbackClock = new util.Clock();
  RT_Circle_Frame_Feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Circle_Frame_Feedback', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  RT_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : feedback_size,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "Post_Trial"
  Post_TrialClock = new util.Clock();
  Post_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Post_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Post_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Post_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Instr_TR_Hand"
  Instr_TR_HandClock = new util.Clock();
  instr_HAND_TR_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_HAND_TR_text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_HAND_TR_press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Pre_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Pre_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pre_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "TR_Enter_Trials_Hand"
  TR_Enter_Trials_HandClock = new util.Clock();
  TR_Circle_Hand = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Circle_Hand', units : 'height', 
    edges: circle_pol, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: undefined,
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  TR_Circle_Frame_Hand = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Circle_Frame_Hand', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  TR_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  TR_Stim_Hand = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Stim_Hand', units : 'height', 
    edges: 32, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  TR_Press_Hand = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_Feedback"
  TR_FeedbackClock = new util.Clock();
  Tr_Circle_Frame_Feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'Tr_Circle_Frame_Feedback', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  TR_Feedback_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Feedback_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : feedback_size,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "TR_Penalty"
  TR_PenaltyClock = new util.Clock();
  TR_Circle_Frame_Penalty = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Circle_Frame_Penalty', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  TR_Penalty_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Penalty_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Penalty_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Post_Trial"
  Post_TrialClock = new util.Clock();
  Post_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Post_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Post_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Post_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "TR_Hand_Accuracy_Bool"
  TR_Hand_Accuracy_BoolClock = new util.Clock();
  // Initialize components for Routine "Instr_CR_Old"
  Instr_CR_OldClock = new util.Clock();
  Instr_CR_Old_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_CR_Old_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_CR_Old_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Pre_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Pre_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pre_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "RT_Enter_Trial"
  RT_Enter_TrialClock = new util.Clock();
  RT_Circle_Fame = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Circle_Fame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: undefined,
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Ctx = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Ctx', units : 'height', 
    edges: circle_pol, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: undefined,
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  RT_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  RT_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_Feedback"
  RT_FeedbackClock = new util.Clock();
  RT_Circle_Frame_Feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Circle_Frame_Feedback', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  RT_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : feedback_size,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "Post_Trial"
  Post_TrialClock = new util.Clock();
  Post_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Post_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Post_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Post_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Criterion_Det"
  Criterion_DetClock = new util.Clock();
  // Initialize components for Routine "Instr_CR_New"
  Instr_CR_NewClock = new util.Clock();
  Instr_CR_New_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_CR_New_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_CR_New_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Pre_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Pre_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pre_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "RT_Enter_Trial"
  RT_Enter_TrialClock = new util.Clock();
  RT_Circle_Fame = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Circle_Fame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: undefined,
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Ctx = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Ctx', units : 'height', 
    edges: circle_pol, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: undefined,
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  RT_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  RT_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_Feedback"
  RT_FeedbackClock = new util.Clock();
  RT_Circle_Frame_Feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Circle_Frame_Feedback', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  RT_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : feedback_size,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "Post_Trial"
  Post_TrialClock = new util.Clock();
  Post_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Post_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Post_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Post_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Criterion_Det"
  Criterion_DetClock = new util.Clock();
  // Initialize components for Routine "Instr_RT_Old"
  Instr_RT_OldClock = new util.Clock();
  Instr_RT_Old_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_RT_Old_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_RT_Old_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Pre_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Pre_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pre_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "RT_Enter_Trial"
  RT_Enter_TrialClock = new util.Clock();
  RT_Circle_Fame = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Circle_Fame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: undefined,
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Ctx = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Ctx', units : 'height', 
    edges: circle_pol, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: undefined,
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  RT_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  RT_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_Feedback"
  RT_FeedbackClock = new util.Clock();
  RT_Circle_Frame_Feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Circle_Frame_Feedback', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  RT_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : feedback_size,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "Post_Trial"
  Post_TrialClock = new util.Clock();
  Post_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Post_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Post_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Post_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Instr_RT_New"
  Instr_RT_NewClock = new util.Clock();
  Instr_RT_New_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_RT_New_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_RT_New_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Pre_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Pre_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pre_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "RT_Enter_Trial"
  RT_Enter_TrialClock = new util.Clock();
  RT_Circle_Fame = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Circle_Fame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: undefined,
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  RT_Ctx = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Ctx', units : 'height', 
    edges: circle_pol, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: undefined,
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  RT_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  RT_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "RT_Feedback"
  RT_FeedbackClock = new util.Clock();
  RT_Circle_Frame_Feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'RT_Circle_Frame_Feedback', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  RT_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RT_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : feedback_size,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "Post_Trial"
  Post_TrialClock = new util.Clock();
  Post_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Post_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Post_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Post_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Instr_TR_Old"
  Instr_TR_OldClock = new util.Clock();
  Instr_TR_Old_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_TR_Old_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_TR_Old_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Pre_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Pre_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pre_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "TR_Enter_Trials"
  TR_Enter_TrialsClock = new util.Clock();
  TR_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  TR_Circle = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Circle', units : 'height', 
    edges: circle_pol, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: undefined,
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  TR_Ctx = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Ctx', units : 'height', 
    edges: circle_pol, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: undefined,
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  TR_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  TR_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_Feedback"
  TR_FeedbackClock = new util.Clock();
  Tr_Circle_Frame_Feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'Tr_Circle_Frame_Feedback', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  TR_Feedback_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Feedback_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : feedback_size,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "TR_Penalty"
  TR_PenaltyClock = new util.Clock();
  TR_Circle_Frame_Penalty = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Circle_Frame_Penalty', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  TR_Penalty_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Penalty_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Penalty_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Post_Trial"
  Post_TrialClock = new util.Clock();
  Post_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Post_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Post_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Post_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "Instr_TR_New"
  Instr_TR_NewClock = new util.Clock();
  Instr_TR_New_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_TR_New_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_TR_New_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Creat_StimSeq"
  Creat_StimSeqClock = new util.Clock();
  // Initialize components for Routine "Instr_Block_Num"
  Instr_Block_NumClock = new util.Clock();
  Instr_Block_Num_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_Block_Num_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_Block_Num_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Trial"
  Pre_TrialClock = new util.Clock();
  Pre_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Pre_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Pre_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Pre_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "TR_Enter_Trials"
  TR_Enter_TrialsClock = new util.Clock();
  TR_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  TR_Circle = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Circle', units : 'height', 
    edges: circle_pol, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: undefined,
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  TR_Ctx = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Ctx', units : 'height', 
    edges: circle_pol, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: undefined,
    fillColor: new util.Color(1.0),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  TR_Stim_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Stim_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  TR_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TR_Feedback"
  TR_FeedbackClock = new util.Clock();
  Tr_Circle_Frame_Feedback = new visual.Polygon ({
    win: psychoJS.window, name: 'Tr_Circle_Frame_Feedback', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  TR_Feedback_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Feedback_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Feedback_Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TR_Feedback_Image', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : feedback_size,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "TR_Penalty"
  TR_PenaltyClock = new util.Clock();
  TR_Circle_Frame_Penalty = new visual.Polygon ({
    win: psychoJS.window, name: 'TR_Circle_Frame_Penalty', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  TR_Penalty_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TR_Penalty_Text',
    alignHoriz: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  TR_Penalty_Press = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Post_Trial"
  Post_TrialClock = new util.Clock();
  Post_Trial_Circle_Frame = new visual.Polygon ({
    win: psychoJS.window, name: 'Post_Trial_Circle_Frame', units : 'height', 
    edges: circle_pol, size:[0.3, 0.3],
    ori: 0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color(1.0),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  Post_Trial_HandShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Post_Trial_HandShape', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });

  // Initialize components for Routine "Instr_End_Exp"
  Instr_End_ExpClock = new util.Clock();
  Instr_End_Exp_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr_End_Exp_Text',
    alignText: 'center',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Instr_End_Exp_Key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}



var Import_File;
var currentLoop;
function Import_FileLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Import_File = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions.xlsx', '0:3'),
    seed: undefined, name: 'Import_File'
  });
  psychoJS.experiment.addLoop(Import_File); // add the loop to the experiment
  currentLoop = Import_File;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisImport_File of Import_File) {
    const snapshot = Import_File.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Import_Stim_FileRoutineBegin(snapshot));
    thisScheduler.add(Import_Stim_FileRoutineEachFrame(snapshot));
    thisScheduler.add(Import_Stim_FileRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function Import_FileLoopEnd() {
  psychoJS.experiment.removeLoop(Import_File);

  return Scheduler.Event.NEXT;
}


var Instr_Exp_Bool;
function Instr_Exp_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Instr_Exp_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: instr_exp, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Instr_Exp_Bool'
  });
  psychoJS.experiment.addLoop(Instr_Exp_Bool); // add the loop to the experiment
  currentLoop = Instr_Exp_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInstr_Exp_Bool of Instr_Exp_Bool) {
    const snapshot = Instr_Exp_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_ExpRoutineBegin(snapshot));
    thisScheduler.add(Instr_ExpRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_ExpRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function Instr_Exp_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(Instr_Exp_Bool);

  return Scheduler.Event.NEXT;
}


var RT_Bool_Hand;
function RT_Bool_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_Bool_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: hand_rt, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_Bool_Hand'
  });
  psychoJS.experiment.addLoop(RT_Bool_Hand); // add the loop to the experiment
  currentLoop = RT_Bool_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_Bool_Hand of RT_Bool_Hand) {
    const snapshot = RT_Bool_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_RT_HandRoutineBegin(snapshot));
    thisScheduler.add(Instr_RT_HandRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_RT_HandRoutineEnd(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    const RT_Iter_HandLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RT_Iter_HandLoopBegin, RT_Iter_HandLoopScheduler);
    thisScheduler.add(RT_Iter_HandLoopScheduler);
    thisScheduler.add(RT_Iter_HandLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var RT_Iter_Hand;
function RT_Iter_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_Iter_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials_hand, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_Iter_Hand'
  });
  psychoJS.experiment.addLoop(RT_Iter_Hand); // add the loop to the experiment
  currentLoop = RT_Iter_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_Iter_Hand of RT_Iter_Hand) {
    const snapshot = RT_Iter_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_Enter_Trial_HandRoutineBegin(snapshot));
    thisScheduler.add(RT_Enter_Trial_HandRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Enter_Trial_HandRoutineEnd(snapshot));
    thisScheduler.add(RT_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(Post_TrialRoutineBegin(snapshot));
    thisScheduler.add(Post_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Post_TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function RT_Iter_HandLoopEnd() {
  psychoJS.experiment.removeLoop(RT_Iter_Hand);

  return Scheduler.Event.NEXT;
}


function RT_Bool_HandLoopEnd() {
  psychoJS.experiment.removeLoop(RT_Bool_Hand);

  return Scheduler.Event.NEXT;
}


var TR_Bool_Hand;
function TR_Bool_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Bool_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: hand_tr, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Bool_Hand'
  });
  psychoJS.experiment.addLoop(TR_Bool_Hand); // add the loop to the experiment
  currentLoop = TR_Bool_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Bool_Hand of TR_Bool_Hand) {
    const snapshot = TR_Bool_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_TR_HandRoutineBegin(snapshot));
    thisScheduler.add(Instr_TR_HandRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_TR_HandRoutineEnd(snapshot));
    const TR_Block_HandLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Block_HandLoopBegin, TR_Block_HandLoopScheduler);
    thisScheduler.add(TR_Block_HandLoopScheduler);
    thisScheduler.add(TR_Block_HandLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Block_Hand;
function TR_Block_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Block_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_block_hand, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Block_Hand'
  });
  psychoJS.experiment.addLoop(TR_Block_Hand); // add the loop to the experiment
  currentLoop = TR_Block_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Block_Hand of TR_Block_Hand) {
    const snapshot = TR_Block_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    const TR_Iter_HandLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Iter_HandLoopBegin, TR_Iter_HandLoopScheduler);
    thisScheduler.add(TR_Iter_HandLoopScheduler);
    thisScheduler.add(TR_Iter_HandLoopEnd);
    thisScheduler.add(TR_Hand_Accuracy_BoolRoutineBegin(snapshot));
    thisScheduler.add(TR_Hand_Accuracy_BoolRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Hand_Accuracy_BoolRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Iter_Hand;
function TR_Iter_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Iter_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials_hand, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Iter_Hand'
  });
  psychoJS.experiment.addLoop(TR_Iter_Hand); // add the loop to the experiment
  currentLoop = TR_Iter_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Iter_Hand of TR_Iter_Hand) {
    const snapshot = TR_Iter_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(TR_Enter_Trials_HandRoutineBegin(snapshot));
    thisScheduler.add(TR_Enter_Trials_HandRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Enter_Trials_HandRoutineEnd(snapshot));
    const TR_Feedback_Bool_HandLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Feedback_Bool_HandLoopBegin, TR_Feedback_Bool_HandLoopScheduler);
    thisScheduler.add(TR_Feedback_Bool_HandLoopScheduler);
    thisScheduler.add(TR_Feedback_Bool_HandLoopEnd);
    const TR_Penalty_Bool_HandLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Penalty_Bool_HandLoopBegin, TR_Penalty_Bool_HandLoopScheduler);
    thisScheduler.add(TR_Penalty_Bool_HandLoopScheduler);
    thisScheduler.add(TR_Penalty_Bool_HandLoopEnd);
    thisScheduler.add(Post_TrialRoutineBegin(snapshot));
    thisScheduler.add(Post_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Post_TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Feedback_Bool_Hand;
function TR_Feedback_Bool_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Feedback_Bool_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_feedback, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Feedback_Bool_Hand'
  });
  psychoJS.experiment.addLoop(TR_Feedback_Bool_Hand); // add the loop to the experiment
  currentLoop = TR_Feedback_Bool_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Feedback_Bool_Hand of TR_Feedback_Bool_Hand) {
    const snapshot = TR_Feedback_Bool_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Feedback_Bool_HandLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Feedback_Bool_Hand);

  return Scheduler.Event.NEXT;
}


var TR_Penalty_Bool_Hand;
function TR_Penalty_Bool_HandLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Penalty_Bool_Hand = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_penalty, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Penalty_Bool_Hand'
  });
  psychoJS.experiment.addLoop(TR_Penalty_Bool_Hand); // add the loop to the experiment
  currentLoop = TR_Penalty_Bool_Hand;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Penalty_Bool_Hand of TR_Penalty_Bool_Hand) {
    const snapshot = TR_Penalty_Bool_Hand.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_PenaltyRoutineBegin(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEachFrame(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Penalty_Bool_HandLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Penalty_Bool_Hand);

  return Scheduler.Event.NEXT;
}


function TR_Iter_HandLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Iter_Hand);

  return Scheduler.Event.NEXT;
}


function TR_Block_HandLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Block_Hand);

  return Scheduler.Event.NEXT;
}


function TR_Bool_HandLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Bool_Hand);

  return Scheduler.Event.NEXT;
}


var CR_Old_Bool;
function CR_Old_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_Old_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: cr_old, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_Old_Bool'
  });
  psychoJS.experiment.addLoop(CR_Old_Bool); // add the loop to the experiment
  currentLoop = CR_Old_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_Old_Bool of CR_Old_Bool) {
    const snapshot = CR_Old_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_CR_OldRoutineBegin(snapshot));
    thisScheduler.add(Instr_CR_OldRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_CR_OldRoutineEnd(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    const CR_Old_IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(CR_Old_IterLoopBegin, CR_Old_IterLoopScheduler);
    thisScheduler.add(CR_Old_IterLoopScheduler);
    thisScheduler.add(CR_Old_IterLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var CR_Old_Iter;
function CR_Old_IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_Old_Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials_cr, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_Old_Iter'
  });
  psychoJS.experiment.addLoop(CR_Old_Iter); // add the loop to the experiment
  currentLoop = CR_Old_Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_Old_Iter of CR_Old_Iter) {
    const snapshot = CR_Old_Iter.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineBegin(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(Criterion_DetRoutineBegin(snapshot));
    thisScheduler.add(Criterion_DetRoutineEachFrame(snapshot));
    thisScheduler.add(Criterion_DetRoutineEnd(snapshot));
    thisScheduler.add(Post_TrialRoutineBegin(snapshot));
    thisScheduler.add(Post_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Post_TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function CR_Old_IterLoopEnd() {
  psychoJS.experiment.removeLoop(CR_Old_Iter);

  return Scheduler.Event.NEXT;
}


function CR_Old_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(CR_Old_Bool);

  return Scheduler.Event.NEXT;
}


var CR_New_Bool;
function CR_New_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_New_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: cr_new, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_New_Bool'
  });
  psychoJS.experiment.addLoop(CR_New_Bool); // add the loop to the experiment
  currentLoop = CR_New_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_New_Bool of CR_New_Bool) {
    const snapshot = CR_New_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_CR_NewRoutineBegin(snapshot));
    thisScheduler.add(Instr_CR_NewRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_CR_NewRoutineEnd(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    const CR_New_IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(CR_New_IterLoopBegin, CR_New_IterLoopScheduler);
    thisScheduler.add(CR_New_IterLoopScheduler);
    thisScheduler.add(CR_New_IterLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var CR_New_Iter;
function CR_New_IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  CR_New_Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials_cr, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'CR_New_Iter'
  });
  psychoJS.experiment.addLoop(CR_New_Iter); // add the loop to the experiment
  currentLoop = CR_New_Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisCR_New_Iter of CR_New_Iter) {
    const snapshot = CR_New_Iter.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineBegin(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(Criterion_DetRoutineBegin(snapshot));
    thisScheduler.add(Criterion_DetRoutineEachFrame(snapshot));
    thisScheduler.add(Criterion_DetRoutineEnd(snapshot));
    thisScheduler.add(Post_TrialRoutineBegin(snapshot));
    thisScheduler.add(Post_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Post_TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function CR_New_IterLoopEnd() {
  psychoJS.experiment.removeLoop(CR_New_Iter);

  return Scheduler.Event.NEXT;
}


function CR_New_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(CR_New_Bool);

  return Scheduler.Event.NEXT;
}


var RT_Old_Bool;
function RT_Old_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_Old_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: rt_old, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_Old_Bool'
  });
  psychoJS.experiment.addLoop(RT_Old_Bool); // add the loop to the experiment
  currentLoop = RT_Old_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_Old_Bool of RT_Old_Bool) {
    const snapshot = RT_Old_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_RT_OldRoutineBegin(snapshot));
    thisScheduler.add(Instr_RT_OldRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_RT_OldRoutineEnd(snapshot));
    const RT_Old_BlockLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RT_Old_BlockLoopBegin, RT_Old_BlockLoopScheduler);
    thisScheduler.add(RT_Old_BlockLoopScheduler);
    thisScheduler.add(RT_Old_BlockLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var RT_Old_Block;
function RT_Old_BlockLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_Old_Block = new TrialHandler({
    psychoJS: psychoJS,
    nReps: rt_old_block, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_Old_Block'
  });
  psychoJS.experiment.addLoop(RT_Old_Block); // add the loop to the experiment
  currentLoop = RT_Old_Block;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_Old_Block of RT_Old_Block) {
    const snapshot = RT_Old_Block.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    const RT_Old_IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RT_Old_IterLoopBegin, RT_Old_IterLoopScheduler);
    thisScheduler.add(RT_Old_IterLoopScheduler);
    thisScheduler.add(RT_Old_IterLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var RT_Old_Iter;
function RT_Old_IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_Old_Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_Old_Iter'
  });
  psychoJS.experiment.addLoop(RT_Old_Iter); // add the loop to the experiment
  currentLoop = RT_Old_Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_Old_Iter of RT_Old_Iter) {
    const snapshot = RT_Old_Iter.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineBegin(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(Post_TrialRoutineBegin(snapshot));
    thisScheduler.add(Post_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Post_TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function RT_Old_IterLoopEnd() {
  psychoJS.experiment.removeLoop(RT_Old_Iter);

  return Scheduler.Event.NEXT;
}


function RT_Old_BlockLoopEnd() {
  psychoJS.experiment.removeLoop(RT_Old_Block);

  return Scheduler.Event.NEXT;
}


function RT_Old_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(RT_Old_Bool);

  return Scheduler.Event.NEXT;
}


var RT_New_Bool;
function RT_New_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_New_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: rt_new, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_New_Bool'
  });
  psychoJS.experiment.addLoop(RT_New_Bool); // add the loop to the experiment
  currentLoop = RT_New_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_New_Bool of RT_New_Bool) {
    const snapshot = RT_New_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_RT_NewRoutineBegin(snapshot));
    thisScheduler.add(Instr_RT_NewRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_RT_NewRoutineEnd(snapshot));
    const RT_New_BlockLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RT_New_BlockLoopBegin, RT_New_BlockLoopScheduler);
    thisScheduler.add(RT_New_BlockLoopScheduler);
    thisScheduler.add(RT_New_BlockLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var RT_New_Block;
function RT_New_BlockLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_New_Block = new TrialHandler({
    psychoJS: psychoJS,
    nReps: rt_new_block, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_New_Block'
  });
  psychoJS.experiment.addLoop(RT_New_Block); // add the loop to the experiment
  currentLoop = RT_New_Block;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_New_Block of RT_New_Block) {
    const snapshot = RT_New_Block.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    const RT_New_IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RT_New_IterLoopBegin, RT_New_IterLoopScheduler);
    thisScheduler.add(RT_New_IterLoopScheduler);
    thisScheduler.add(RT_New_IterLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var RT_New_Iter;
function RT_New_IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RT_New_Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RT_New_Iter'
  });
  psychoJS.experiment.addLoop(RT_New_Iter); // add the loop to the experiment
  currentLoop = RT_New_Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRT_New_Iter of RT_New_Iter) {
    const snapshot = RT_New_Iter.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineBegin(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(RT_Enter_TrialRoutineEnd(snapshot));
    thisScheduler.add(RT_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(RT_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(Post_TrialRoutineBegin(snapshot));
    thisScheduler.add(Post_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Post_TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function RT_New_IterLoopEnd() {
  psychoJS.experiment.removeLoop(RT_New_Iter);

  return Scheduler.Event.NEXT;
}


function RT_New_BlockLoopEnd() {
  psychoJS.experiment.removeLoop(RT_New_Block);

  return Scheduler.Event.NEXT;
}


function RT_New_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(RT_New_Bool);

  return Scheduler.Event.NEXT;
}


var TR_Old_Bool;
function TR_Old_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Old_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_old, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Old_Bool'
  });
  psychoJS.experiment.addLoop(TR_Old_Bool); // add the loop to the experiment
  currentLoop = TR_Old_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Old_Bool of TR_Old_Bool) {
    const snapshot = TR_Old_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_TR_OldRoutineBegin(snapshot));
    thisScheduler.add(Instr_TR_OldRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_TR_OldRoutineEnd(snapshot));
    const TR_Old_BlockLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Old_BlockLoopBegin, TR_Old_BlockLoopScheduler);
    thisScheduler.add(TR_Old_BlockLoopScheduler);
    thisScheduler.add(TR_Old_BlockLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Old_Block;
function TR_Old_BlockLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Old_Block = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_old_block, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Old_Block'
  });
  psychoJS.experiment.addLoop(TR_Old_Block); // add the loop to the experiment
  currentLoop = TR_Old_Block;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Old_Block of TR_Old_Block) {
    const snapshot = TR_Old_Block.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    const TR_Old_IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Old_IterLoopBegin, TR_Old_IterLoopScheduler);
    thisScheduler.add(TR_Old_IterLoopScheduler);
    thisScheduler.add(TR_Old_IterLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Old_Iter;
function TR_Old_IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Old_Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Old_Iter'
  });
  psychoJS.experiment.addLoop(TR_Old_Iter); // add the loop to the experiment
  currentLoop = TR_Old_Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Old_Iter of TR_Old_Iter) {
    const snapshot = TR_Old_Iter.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineBegin(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineEnd(snapshot));
    const TR_Feedback_Old_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Feedback_Old_BoolLoopBegin, TR_Feedback_Old_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_Old_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_Old_BoolLoopEnd);
    const TR_Penalty_Old_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Penalty_Old_BoolLoopBegin, TR_Penalty_Old_BoolLoopScheduler);
    thisScheduler.add(TR_Penalty_Old_BoolLoopScheduler);
    thisScheduler.add(TR_Penalty_Old_BoolLoopEnd);
    thisScheduler.add(Post_TrialRoutineBegin(snapshot));
    thisScheduler.add(Post_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Post_TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Feedback_Old_Bool;
function TR_Feedback_Old_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Feedback_Old_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_feedback, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Feedback_Old_Bool'
  });
  psychoJS.experiment.addLoop(TR_Feedback_Old_Bool); // add the loop to the experiment
  currentLoop = TR_Feedback_Old_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Feedback_Old_Bool of TR_Feedback_Old_Bool) {
    const snapshot = TR_Feedback_Old_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Feedback_Old_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Feedback_Old_Bool);

  return Scheduler.Event.NEXT;
}


var TR_Penalty_Old_Bool;
function TR_Penalty_Old_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Penalty_Old_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_penalty, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Penalty_Old_Bool'
  });
  psychoJS.experiment.addLoop(TR_Penalty_Old_Bool); // add the loop to the experiment
  currentLoop = TR_Penalty_Old_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Penalty_Old_Bool of TR_Penalty_Old_Bool) {
    const snapshot = TR_Penalty_Old_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_PenaltyRoutineBegin(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEachFrame(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Penalty_Old_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Penalty_Old_Bool);

  return Scheduler.Event.NEXT;
}


function TR_Old_IterLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Old_Iter);

  return Scheduler.Event.NEXT;
}


function TR_Old_BlockLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Old_Block);

  return Scheduler.Event.NEXT;
}


function TR_Old_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Old_Bool);

  return Scheduler.Event.NEXT;
}


var TR_New_Bool;
function TR_New_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_New_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_new, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_New_Bool'
  });
  psychoJS.experiment.addLoop(TR_New_Bool); // add the loop to the experiment
  currentLoop = TR_New_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_New_Bool of TR_New_Bool) {
    const snapshot = TR_New_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Instr_TR_NewRoutineBegin(snapshot));
    thisScheduler.add(Instr_TR_NewRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_TR_NewRoutineEnd(snapshot));
    const TR_New_BlockLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_New_BlockLoopBegin, TR_New_BlockLoopScheduler);
    thisScheduler.add(TR_New_BlockLoopScheduler);
    thisScheduler.add(TR_New_BlockLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_New_Block;
function TR_New_BlockLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_New_Block = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_new_block, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_New_Block'
  });
  psychoJS.experiment.addLoop(TR_New_Block); // add the loop to the experiment
  currentLoop = TR_New_Block;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_New_Block of TR_New_Block) {
    const snapshot = TR_New_Block.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineBegin(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEachFrame(snapshot));
    thisScheduler.add(Creat_StimSeqRoutineEnd(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineBegin(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEachFrame(snapshot));
    thisScheduler.add(Instr_Block_NumRoutineEnd(snapshot));
    const TR_New_IterLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_New_IterLoopBegin, TR_New_IterLoopScheduler);
    thisScheduler.add(TR_New_IterLoopScheduler);
    thisScheduler.add(TR_New_IterLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_New_Iter;
function TR_New_IterLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_New_Iter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_trials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_New_Iter'
  });
  psychoJS.experiment.addLoop(TR_New_Iter); // add the loop to the experiment
  currentLoop = TR_New_Iter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_New_Iter of TR_New_Iter) {
    const snapshot = TR_New_Iter.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Pre_TrialRoutineBegin(snapshot));
    thisScheduler.add(Pre_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Pre_TrialRoutineEnd(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineBegin(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineEachFrame(snapshot));
    thisScheduler.add(TR_Enter_TrialsRoutineEnd(snapshot));
    const TR_Feedback_New_BoolLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Feedback_New_BoolLoopBegin, TR_Feedback_New_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_New_BoolLoopScheduler);
    thisScheduler.add(TR_Feedback_New_BoolLoopEnd);
    const TR_Feedback_New_PenaltyLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(TR_Feedback_New_PenaltyLoopBegin, TR_Feedback_New_PenaltyLoopScheduler);
    thisScheduler.add(TR_Feedback_New_PenaltyLoopScheduler);
    thisScheduler.add(TR_Feedback_New_PenaltyLoopEnd);
    thisScheduler.add(Post_TrialRoutineBegin(snapshot));
    thisScheduler.add(Post_TrialRoutineEachFrame(snapshot));
    thisScheduler.add(Post_TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var TR_Feedback_New_Bool;
function TR_Feedback_New_BoolLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Feedback_New_Bool = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_feedback, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Feedback_New_Bool'
  });
  psychoJS.experiment.addLoop(TR_Feedback_New_Bool); // add the loop to the experiment
  currentLoop = TR_Feedback_New_Bool;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Feedback_New_Bool of TR_Feedback_New_Bool) {
    const snapshot = TR_Feedback_New_Bool.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_FeedbackRoutineBegin(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(TR_FeedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Feedback_New_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Feedback_New_Bool);

  return Scheduler.Event.NEXT;
}


var TR_Feedback_New_Penalty;
function TR_Feedback_New_PenaltyLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  TR_Feedback_New_Penalty = new TrialHandler({
    psychoJS: psychoJS,
    nReps: tr_penalty, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'TR_Feedback_New_Penalty'
  });
  psychoJS.experiment.addLoop(TR_Feedback_New_Penalty); // add the loop to the experiment
  currentLoop = TR_Feedback_New_Penalty;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTR_Feedback_New_Penalty of TR_Feedback_New_Penalty) {
    const snapshot = TR_Feedback_New_Penalty.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TR_PenaltyRoutineBegin(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEachFrame(snapshot));
    thisScheduler.add(TR_PenaltyRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function TR_Feedback_New_PenaltyLoopEnd() {
  psychoJS.experiment.removeLoop(TR_Feedback_New_Penalty);

  return Scheduler.Event.NEXT;
}


function TR_New_IterLoopEnd() {
  psychoJS.experiment.removeLoop(TR_New_Iter);

  return Scheduler.Event.NEXT;
}


function TR_New_BlockLoopEnd() {
  psychoJS.experiment.removeLoop(TR_New_Block);

  return Scheduler.Event.NEXT;
}


function TR_New_BoolLoopEnd() {
  psychoJS.experiment.removeLoop(TR_New_Bool);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var stim_key_map_ctx1;
var stim_key_map_ctx2;
var feedback_p;
var feedback_n;
var stim_num_hand;
var stim_num;
var ctx_map;
var ctx_color_map;
var j;
var reorder_key;
var swap_key;
var stim_key_map_rng;
var finger_ctx1;
var finger_ctx2;
var finger_map;
var stim_key_remap_ctx1;
var stim_key_remap_ctx2;
var candidate_map;
var finger_remap_ctx1;
var finger_remap_ctx2;
var finger_remap;
var Import_Stim_FileComponents;
function Import_Stim_FileRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Import_Stim_File'-------
    t = 0;
    Import_Stim_FileClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    
    
    StimList = Import_File.trialList;
    stim_key_map_ctx1 = [];
    stim_key_map_ctx2 = [];
    feedback_p = StimList[0]["Check"];
    feedback_n = StimList[0]["Cross"];
    for (var i = 0, _pj_a = num_ctx; (i < _pj_a); i += 1) {
        ctx_color_list.push(ctx_color_all[i]);
    }
    psychoJS.experiment.addData("Ctx_Color_List", ctx_color_list);

    hand_shape = StimList[0]["Hand"];
    stim_num_hand = [];
    for (var i = 0, _pj_a = num_pos; (i < _pj_a); i += 1) {
        stim_num_hand.push(i);
    }
    for (var i = 0, _pj_a = num_pos; (i < _pj_a); i += 1) {
        x_pos.push(StimList[i]["X_Pos"]);
        y_pos.push(StimList[i]["Y_Pos"]);
        finger.push(StimList[i]["Key"]);
    }
    stim_num = [];
    for (var i = 0, _pj_a = (num_symb * num_ctx); (i < _pj_a); i += 1) {
        stim_num.push(i);
    }
    ctx_map = [];
    ctx_color_map = [];
    
    
    j = 0;
    while ((j < num_ctx)) {
        for (var i = 0, _pj_a = num_symb; (i < _pj_a); i += 1) {
            stim.push(StimList[i]["Stim"]);
            image.push(StimList[i]["imStim"]);
            key_num.push(StimList[i]["KeyNum"]);
        }
        j = (j + 1);
        for (var i = 0, _pj_a = (num_symb * num_ctx); (i < _pj_a); i += 1) {
            if ((i < num_symb)) {
                ctx_color_map.push(ctx_color_list[0]);
                ctx_map.push(ctx_list[0]);
            } else {
                ctx_color_map.push(ctx_color_list[1]);
                ctx_map.push(ctx_list[1]);
            }
        }
    }
    
    stim_key_map_rng = Math.floor(rng2 * n_map) // random interger between 0 and num_symb - 1
    stim_key_map_ctx1 = stim_key_perm[stim_key_map_rng];
    
    rnd = Math.floor(rng3 * n_map) // random interger between 0 and num_symb - 1
    
    if ((grp === 1)) {
        for (var i = rnd, _pj_a = (rnd + n_map); (i < _pj_a); i += 1) {
            reorder_key = 0;
            swap_key = 0;
            if ((i < n_map)) {
                candidate_map = stim_key_perm[i];
            } else {
                candidate_map = stim_key_perm[(i - n_map)];
            }
            
            for (var ii = 0, _pj_b = num_symb; (ii < _pj_b); ii += 1) {
                if ((stim_key_map_ctx1[ii] === candidate_map[ii])) {
                    reorder_key = 0;
                } else {
                    reorder_key = (reorder_key + 1);
                }
                for (var jj = 0, _pj_c = num_symb; (jj < _pj_c); jj += 1) {
                    if ((ii < jj)) {
                        if (((stim_key_map_ctx1[ii] === candidate_map[jj]) && (stim_key_map_ctx1[jj] === candidate_map[ii]))) {
                            swap_key = (swap_key + 1);
                        } else {
                            swap_key = swap_key;
                        }
                    }
                }
            }
            if (((reorder_key === num_symb) && (swap_key === 0))) {
                stim_key_map_ctx2 = candidate_map;
                break;
            }
        }
    } else {
        if ((grp === 2)) {
            for (var i = rnd, _pj_a = (rnd + n_map); (i < _pj_a); i += 1) {
                swap_key = 0;
                if ((i < n_map)) {
                    candidate_map = stim_key_perm[i];
                } else {
                    candidate_map = stim_key_perm[(i - n_map)];
                }
                
                for (var ii = 0, _pj_b = num_symb; (ii < _pj_b); ii += 1) {
                    for (var jj = 0, _pj_c = num_symb; (jj < _pj_c); jj += 1) {
                        if ((ii < jj)) {
                            if (((stim_key_map_ctx1[ii] === candidate_map[jj]) && (stim_key_map_ctx1[jj] === candidate_map[ii]))) {
                                swap_key = (swap_key + 1);
                            } else {
                                swap_key = swap_key;
                            }
                        }
                    }
                }
                if ((swap_key === 1)) {
                    stim_key_map_ctx2 = candidate_map;
                    break;
                }
            }
        }
    }
    
    finger_ctx1 = [];
    finger_ctx2 = [];
    for (var i = 0, _pj_a = num_symb; (i < _pj_a); i += 1) {
        finger_ctx1.push(finger[stim_key_map_ctx1[i]]);
        finger_ctx2.push(finger[stim_key_map_ctx2[i]]);
    }
    psychoJS.experiment.addData("stim_key_map_ctx1", stim_key_map_ctx1);
    psychoJS.experiment.addData("stim_key_map_ctx2", stim_key_map_ctx2);
    finger_map = finger_ctx1.concat(finger_ctx2);
    
    stim_key_remap_ctx1 = stim_key_map_ctx2.slice(0);
    stim_key_remap_ctx2 = stim_key_map_ctx1.slice(0);

    finger_remap_ctx1 = [];
    finger_remap_ctx2 = [];
    for (var i = 0, _pj_a = num_symb; (i < _pj_a); i += 1) {
        finger_remap_ctx1.push(finger[stim_key_remap_ctx1[i]]);
        finger_remap_ctx2.push(finger[stim_key_remap_ctx2[i]]);
    }
    psychoJS.experiment.addData("stim_key_remap_ctx1", stim_key_remap_ctx1);
    psychoJS.experiment.addData("stim_key_remap_ctx2", stim_key_remap_ctx2);
    finger_remap = finger_remap_ctx1.concat(finger_remap_ctx2);
    
    // keep track of which components have finished
    Import_Stim_FileComponents = [];
    
    for (const thisComponent of Import_Stim_FileComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function Import_Stim_FileRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Import_Stim_File'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Import_Stim_FileClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Import_Stim_FileComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

var instr_end_exp_text;
var instr_exp_text;
var instr_rt_text_hand;
var instr_tr_text_hand;
var instr_cr_old_text;
var instr_cr_new_text;
var instr_rt_old_text;
var instr_rt_new_text;
var instr_tr_old_text;
var instr_tr_new_text;
var penalty_toolate_text;
var penalty_tooearly_text;
var feedback_early_text;
var feedback_late_text;
var feedback_good_text;
function Import_Stim_FileRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Import_Stim_File'-------
    for (const thisComponent of Import_Stim_FileComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }

    instr_end_exp_text = `Great job! You have completed the task today.
    
Press (space) to exit.`
    ;

    instr_exp_text = `Thank you for participating in our study! 
    
This study has multiple sessions and it will take 40 minutes today. 

Once you start, you cannot turn off your web browser until you complete the study.

If you are ready, press (space) to continue.`
    ;
    
    instr_rt_text_hand = `The upcoming three blocks are used to be familiar with the task.
    
With your Right hand, place your Index, Middle, and Ring fingers on (H, U, I) respectively. Your fingers will rest on these keys for the entirety of the experiment.
    
You will see a hand appear on the screen. One of the fingers on the screen will light up and your job is to press the corresponding finger as quickly and as accurately as possible.
    
Ready? Press (H, U, or I) to continue.`
    ;
    instr_tr_text_hand = `Great Job!
    
Now, you need to press the corresponding finger when the larger white ring intersects the smaller grey ring. Sometimes, the finger will light up at the very last second. You will not have enough time to know which finger to press. In this case, MAKE A GUESS. Always press one of your fingers when two rings intersect.
    
Let’s practice! Press (H, U, or I) to continue.`
    ;
    instr_cr_old_text = `Good Job! You are now ready for the tasks!
    
You will see three symbols on the screen. Each symbol corresponds to one of the keys (H, U, I). Your job is to figure out which symbol corresponds with which key.
    
ACCURACY is the priority, so go as slowly as you need to. The more mistakes you make, the longer this block will take.
    
Ready? Press (H, U, or I) to continue.`
    ;
    instr_cr_new_text = `Congratulations!
    
Now, you need to learn a new map bewtween those four symbols and two keys.
    
Again, ACCURACY is the priority, so go as slowly as you need to. The more mistaks you make, the longer this block will take.
    
When you are ready, press (H, U, or I) to continue.`
    ;
    if ((session === 1)) {
        instr_rt_old_text = `Now using the maps that you just learned, your job is to press the corresponding key as quickly and as accurately as possible.
    
There will be ${rt_old_block} blocks with short breaks in between.
    
Whenever you are ready, press (H, U, or I) to start.`
    ;
    } else {
        if (session === 2 || session === 4 || session === 6 || session === 8 || session === 10) {
            instr_rt_old_text = `Welcome back! 
            
Today, we continue to practice the symbol-key maps for ${rt_old_block} blocks.
    
Your job is to press the corresponding key as quickly and accurately as you can.

Remember, once you start, you cannot turn off your web browser until you complete the study.
    
Ready? Press (H, U, or I) to start.`
    ;
        } else {
            if (session === 3 || session === 5 || session === 7 || session === 9 || session === 11) {
                instr_rt_old_text = `Welcome back!
                
Today, we first continue to practice the symbol-key maps for ${rt_old_block} blocks.
    
Your job is to press the corresponding key as quickly and accurately as you can.

Remember, once you start, you cannot turn off your web browser until you complete the study.
    
Whenever you are ready, press (H, U, or I) to start.`
    ;
            }
        }
    }
    instr_rt_new_text = `Now using the maps that you just learned, your job is to press the corresponding key as quickly and as accurately as possible.
    
There will be ${rt_old_block} blocks with short breaks in between.
    
Whenever you are ready, press (H, U, or I) to start.`
    ;
    instr_tr_old_text = `Good job so far.
    
In the following ${tr_old_block} blocks, press the corresponding key when the larger white ring intersects the smaller gray ring. Remember, the symbol may show up very late. In this case, MAKE A GUESS. This task is designed to be difficult, so it is okay to make a guess.
    
Press (H, U, or I) to start.`
    ;
    instr_tr_new_text = `Good job so far.
    
In the following ${tr_new_block} blocks, use the NEW MAP you learned.

Press the corresponding key when the larger white ring intersects the smaller gray ring. Remember, the symbol may show up very late. In this case, MAKE A GUESS. This task is designed to be difficult, so it is okay to make a guess.
    
Press (H, U, or I) to start.`
    ;
    penalty_toolate_text = `Response was too late
2 second penalty
After 2 second, press (H, U, or I) to continue`
    ;
    penalty_tooearly_text = `Response was too early
2 second penalty
After 2 second, press (H, U, or I) to continue`
    ;
    feedback_early_text = `little early`;
    feedback_late_text = `little late`;
    feedback_good_text = `good timing`;
    
    // the Routine "Import_Stim_File" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_Exp_Key_allKeys;
var Instr_ExpComponents;
function Instr_ExpRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_Exp'-------
    t = 0;
    Instr_ExpClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_Exp_Text.setText(instr_exp_text);
    Instr_Exp_Key.keys = undefined;
    Instr_Exp_Key.rt = undefined;
    _Instr_Exp_Key_allKeys = [];
    // keep track of which components have finished
    Instr_ExpComponents = [];
    Instr_ExpComponents.push(Instr_Exp_Text);
    Instr_ExpComponents.push(Instr_Exp_Key);
    
    for (const thisComponent of Instr_ExpComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_ExpRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_Exp'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_ExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_Exp_Text* updates
    if (t >= 0.0 && Instr_Exp_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Exp_Text.tStart = t;  // (not accounting for frame time here)
      Instr_Exp_Text.frameNStart = frameN;  // exact frame index
      
      Instr_Exp_Text.setAutoDraw(true);
    }

    
    // *Instr_Exp_Key* updates
    if (t >= 0.0 && Instr_Exp_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Exp_Key.tStart = t;  // (not accounting for frame time here)
      Instr_Exp_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_Exp_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_Exp_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_Exp_Key.clearEvents(); });
    }

    if (Instr_Exp_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_Exp_Key.getKeys({keyList: ['space'], waitRelease: false});
      _Instr_Exp_Key_allKeys = _Instr_Exp_Key_allKeys.concat(theseKeys);
      if (_Instr_Exp_Key_allKeys.length > 0) {
        Instr_Exp_Key.keys = _Instr_Exp_Key_allKeys[0].name;  // just the first key pressed
        Instr_Exp_Key.rt = _Instr_Exp_Key_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_ExpComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_ExpRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_Exp'-------
    for (const thisComponent of Instr_ExpComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_Exp_Key.keys', Instr_Exp_Key.keys);
    if (typeof Instr_Exp_Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_Exp_Key.rt', Instr_Exp_Key.rt);
        routineTimer.reset();
        }
    
    Instr_Exp_Key.stop();
    // the Routine "Instr_Exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stim_type;
var block_count;
var hand_opacity;
var _Instr_RT_Hand_Key_allKeys;
var Instr_RT_HandComponents;
function Instr_RT_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_RT_Hand'-------
    t = 0;
    Instr_RT_HandClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    block_type = "RT";
    stim_type = "Hand";
    remap = 0;
    block_count = 0;
    hand_opacity = 1;
    
    Instr_RT_Hand_Rext.setText(instr_rt_text_hand);
    Instr_RT_Hand_Key.keys = undefined;
    Instr_RT_Hand_Key.rt = undefined;
    _Instr_RT_Hand_Key_allKeys = [];
    // keep track of which components have finished
    Instr_RT_HandComponents = [];
    Instr_RT_HandComponents.push(Instr_RT_Hand_Rext);
    Instr_RT_HandComponents.push(Instr_RT_Hand_Key);
    
    for (const thisComponent of Instr_RT_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_RT_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_RT_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_RT_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_RT_Hand_Rext* updates
    if (t >= 0.0 && Instr_RT_Hand_Rext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_Hand_Rext.tStart = t;  // (not accounting for frame time here)
      Instr_RT_Hand_Rext.frameNStart = frameN;  // exact frame index
      
      Instr_RT_Hand_Rext.setAutoDraw(true);
    }

    
    // *Instr_RT_Hand_Key* updates
    if (t >= 0.0 && Instr_RT_Hand_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_Hand_Key.tStart = t;  // (not accounting for frame time here)
      Instr_RT_Hand_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_RT_Hand_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_Hand_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_Hand_Key.clearEvents(); });
    }

    if (Instr_RT_Hand_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_RT_Hand_Key.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _Instr_RT_Hand_Key_allKeys = _Instr_RT_Hand_Key_allKeys.concat(theseKeys);
      if (_Instr_RT_Hand_Key_allKeys.length > 0) {
        Instr_RT_Hand_Key.keys = _Instr_RT_Hand_Key_allKeys[0].name;  // just the first key pressed
        Instr_RT_Hand_Key.rt = _Instr_RT_Hand_Key_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_RT_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_RT_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_RT_Hand'-------
    for (const thisComponent of Instr_RT_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_RT_Hand_Key.keys', Instr_RT_Hand_Key.keys);
    if (typeof Instr_RT_Hand_Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_RT_Hand_Key.rt', Instr_RT_Hand_Key.rt);
        routineTimer.reset();
        }
    
    Instr_RT_Hand_Key.stop();
    // the Routine "Instr_RT_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_count;
var trial_count_item;
var repeat_count;
var tr_timing_good;
var sum_corr;
var seq_handx;
var seq_handy;
var seq_finger_hand;
var seq_key_num_hand;
var seq_stim_num_hand;
var seq_ctx_color;
var seq_key_num;
var seq_stim_num;
var total_num_trials;
var Creat_StimSeqComponents;
function Creat_StimSeqRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Creat_StimSeq'-------
    t = 0;
    Creat_StimSeqClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    trial_count = 0;
    trial_count_item = [];
    for (var i = 0, _pj_a = (num_symb * num_ctx); (i < _pj_a); i += 1) {
        trial_count_item.push(0);
    }
    repeat_count = 0;
    tr_timing_good = 0;
    sum_corr = new Array(num_symb*num_ctx).fill(0);
    if ((stim_type === "Hand")) {
        seq_handx = [];
        seq_handy = [];
        seq_finger_hand = [];
        seq_key_num_hand = [];
        seq_stim_num_hand = [];
    } else {
        seq_stim = [];
        seq_finger = [];
        seq_image = [];
        seq_ctx = [];
        seq_ctx_color = [];
        seq_key_num = [];
        seq_stim_num = [];
    }
    if ((stim_type === "Hand")) {
        count = 0;
        while ((count < (num_trials_hand / 10))) {
             util.shuffle(x2_hand);
            for (var i, _pj_c = 0, _pj_a = x2_hand, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_handx.push(x_pos[i]);
                seq_handy.push(y_pos[i]);
                seq_finger_hand.push(finger[i]);
                seq_key_num_hand.push(key_num[i]);
                seq_stim_num_hand.push(stim_num_hand[i]);
            }
             util.shuffle(x2_hand);
            for (var i, _pj_c = 0, _pj_a = x2_hand, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_handx.push(x_pos[i]);
                seq_handy.push(y_pos[i]);
                seq_finger_hand.push(finger[i]);
                seq_key_num_hand.push(key_num[i]);
                seq_stim_num_hand.push(stim_num_hand[i]);
            }
             util.shuffle(x_hand);
            for (var i, _pj_c = 0, _pj_a = x_hand, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                seq_handx.push(x_pos[i]);
                seq_handy.push(y_pos[i]);
                seq_finger_hand.push(finger[i]);
                seq_key_num_hand.push(key_num[i]);
                seq_stim_num_hand.push(stim_num_hand[i]);
            }
            count = (count + 1);
        }
    }
    total_num_trials = 0;
    if ((block_type === "CR")) {
        total_num_trials = num_trials_cr;
    } else {
        if ((stim_type === "Symb")) {
            total_num_trials = num_trials;
        }
    }

    count = 0;
    while ((count < (total_num_trials / 20))) {
         util.shuffle(x2);
        for (var i, _pj_c = 0, _pj_a = x2, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            seq_stim.push(stim[i]);
            seq_finger.push(finger[i]);
            seq_image.push(image[i]);
            seq_ctx.push(ctx[i]);
            seq_ctx_color.push(ctx_color[i]);
            seq_key_num.push(key_num[i]);
            seq_stim_num.push(stim_num[i]);
        }
         util.shuffle(x2);
        for (var i, _pj_c = 0, _pj_a = x2, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            seq_stim.push(stim[i]);
            seq_finger.push(finger[i]);
            seq_image.push(image[i]);
            seq_ctx.push(ctx[i]);
            seq_ctx_color.push(ctx_color[i]);
            seq_key_num.push(key_num[i]);
            seq_stim_num.push(stim_num[i]);
        }
         util.shuffle(x);
        for (var i, _pj_c = 0, _pj_a = x, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            seq_stim.push(stim[i]);
            seq_finger.push(finger[i]);
            seq_image.push(image[i]);
            seq_ctx.push(ctx[i]);
            seq_ctx_color.push(ctx_color[i]);
            seq_key_num.push(key_num[i]);
            seq_stim_num.push(stim_num[i]);
        }
        count = (count + 1);
    }
    
    // keep track of which components have finished
    Creat_StimSeqComponents = [];
    
    for (const thisComponent of Creat_StimSeqComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Creat_StimSeqRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Creat_StimSeq'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Creat_StimSeqClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Creat_StimSeqComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Creat_StimSeqRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Creat_StimSeq'-------
    for (const thisComponent of Creat_StimSeqComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    block_count = (block_count + 1);
    
    // the Routine "Creat_StimSeq" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var stim_item;     
var image_item;
var ctx_item;
var ctx_color_item;
var key_item;
var stim_num_item;
var x_item;
var finger_item;
var y_item;
var stim_start_time;
var interval_ind;
var prep_time;
var ctx_prep_time;
var ctx_start_time;
var position_item;
var stim_hand;
var Pre_TrialComponents;
function Pre_TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Pre_Trial'-------
    t = 0;
    Pre_TrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Pre_Trial_Circle_Frame.setLineColor(new util.Color(circle_frame_color));
    Pre_Trial_Circle_Frame.setLineWidth(circle_wd);
    if ((stim_type === "Hand")) {
        x_item = seq_handx[trial_count];
        finger_item = seq_finger_hand[trial_count];
        y_item = seq_handy[trial_count];
        key_item = seq_key_num_hand[trial_count];
        stim_num_item = seq_stim_num_hand[trial_count];
        if ((block_type === "TR")) {
            stim_start_time = ((Math.random() * ((time_limit - too_late_tol) - prep_time_range[0])) + ((time_limit - too_late_tol) - prep_time_range[1]));
            prep_time = ((time_limit - too_late_tol) - stim_start_time);
            ctx_prep_time = 99;
        } else {
            stim_start_time = 0;
            prep_time = 99;
            ctx_prep_time = 99;
        }
        position_item = [x_item, y_item];
        if ((x_item === (- 0.038))) {
            stim_hand = 0;
        } else {
            if ((x_item === 0.014)) {
                stim_hand = 1;
            } else {
                if ((x_item === 0.057)) {
                    stim_hand = 2;
                } else {
                    if ((x_item === 0.1)) {
                        stim_hand = 3;
                    }
                }
            }
        }
    } else {
        stim_item = seq_stim[trial_count];
        finger_item = seq_finger[trial_count];
        image_item = seq_image[trial_count];
        ctx_item = seq_ctx[trial_count];
        ctx_color_item = seq_ctx_color[trial_count];
        key_item = seq_key_num[trial_count];
        stim_num_item = seq_stim_num[trial_count];
        if ((block_type === "TR")) {
            interval_ind = prep_time_ind[stim_num_item][trial_count_item[stim_num_item]];
            prep_time = ((Math.random() * (prep_time_interval[interval_ind][1] - prep_time_interval[interval_ind][0])) + prep_time_interval[interval_ind][0]);
            stim_start_time = ((time_limit - too_late_tol) - prep_time);
            trial_count_item[stim_num_item] = (trial_count_item[stim_num_item] + 1);
            ctx_start_time = 0;
            ctx_start_time = stim_start_time;
            ctx_prep_time = ((time_limit - too_late_tol) - ctx_start_time);
        } else {
            stim_start_time = 0;
            prep_time = 99;
            ctx_start_time = stim_start_time;
            ctx_prep_time = 99;
        }
    }
    
    Pre_Trial_HandShape.setOpacity(hand_opacity);
    Pre_Trial_HandShape.setImage(hand_shape);
    // keep track of which components have finished
    Pre_TrialComponents = [];
    Pre_TrialComponents.push(Pre_Trial_Circle_Frame);
    Pre_TrialComponents.push(Pre_Trial_HandShape);
    
    for (const thisComponent of Pre_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function Pre_TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Pre_Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Pre_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Pre_Trial_Circle_Frame* updates
    if (t >= 0.0 && Pre_Trial_Circle_Frame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pre_Trial_Circle_Frame.tStart = t;  // (not accounting for frame time here)
      Pre_Trial_Circle_Frame.frameNStart = frameN;  // exact frame index
      
      Pre_Trial_Circle_Frame.setAutoDraw(true);
    }

    frameRemains = 0.0 + pre_trial_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pre_Trial_Circle_Frame.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pre_Trial_Circle_Frame.setAutoDraw(false);
    }
    
    // *Pre_Trial_HandShape* updates
    if (t >= 0.0 && Pre_Trial_HandShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pre_Trial_HandShape.tStart = t;  // (not accounting for frame time here)
      Pre_Trial_HandShape.frameNStart = frameN;  // exact frame index
      
      Pre_Trial_HandShape.setAutoDraw(true);
    }

    frameRemains = 0.0 + pre_trial_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pre_Trial_HandShape.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pre_Trial_HandShape.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Pre_TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pre_TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Pre_Trial'-------
    for (const thisComponent of Pre_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Pre_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _RT_Press_Hand_allKeys;
var RT_Enter_Trial_HandComponents;
function RT_Enter_Trial_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Enter_Trial_Hand'-------
    t = 0;
    RT_Enter_Trial_HandClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RT_Circle_Frame_Hand.setOpacity(circle_frame_opacity);
    RT_Circle_Frame_Hand.setLineColor(new util.Color(circle_frame_color));
    RT_Circle_Frame_Hand.setLineWidth(circle_wd);
    RT_Press_Hand.keys = undefined;
    RT_Press_Hand.rt = undefined;
    _RT_Press_Hand_allKeys = [];
    RT_HandShape.setImage(hand_shape);
    RT_Stim_Hand.setPos(position_item);
    // keep track of which components have finished
    RT_Enter_Trial_HandComponents = [];
    RT_Enter_Trial_HandComponents.push(RT_Circle_Frame_Hand);
    RT_Enter_Trial_HandComponents.push(RT_Press_Hand);
    RT_Enter_Trial_HandComponents.push(RT_HandShape);
    RT_Enter_Trial_HandComponents.push(RT_Stim_Hand);
    
    for (const thisComponent of RT_Enter_Trial_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_Enter_Trial_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Enter_Trial_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_Enter_Trial_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RT_Circle_Frame_Hand* updates
    if (t >= 0.0 && RT_Circle_Frame_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Circle_Frame_Hand.tStart = t;  // (not accounting for frame time here)
      RT_Circle_Frame_Hand.frameNStart = frameN;  // exact frame index
      
      RT_Circle_Frame_Hand.setAutoDraw(true);
    }

    
    // *RT_Press_Hand* updates
    if (t >= 0.0 && RT_Press_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Press_Hand.tStart = t;  // (not accounting for frame time here)
      RT_Press_Hand.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { RT_Press_Hand.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { RT_Press_Hand.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { RT_Press_Hand.clearEvents(); });
    }

    if (RT_Press_Hand.status === PsychoJS.Status.STARTED) {
      let theseKeys = RT_Press_Hand.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _RT_Press_Hand_allKeys = _RT_Press_Hand_allKeys.concat(theseKeys);
      if (_RT_Press_Hand_allKeys.length > 0) {
        RT_Press_Hand.keys = _RT_Press_Hand_allKeys[0].name;  // just the first key pressed
        RT_Press_Hand.rt = _RT_Press_Hand_allKeys[0].rt;
        // was this correct?
        if (RT_Press_Hand.keys == finger_item) {
            RT_Press_Hand.corr = 1;
        } else {
            RT_Press_Hand.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *RT_HandShape* updates
    if (t >= 0.0 && RT_HandShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_HandShape.tStart = t;  // (not accounting for frame time here)
      RT_HandShape.frameNStart = frameN;  // exact frame index
      
      RT_HandShape.setAutoDraw(true);
    }

    
    // *RT_Stim_Hand* updates
    if (t >= 0.0 && RT_Stim_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Stim_Hand.tStart = t;  // (not accounting for frame time here)
      RT_Stim_Hand.frameNStart = frameN;  // exact frame index
      
      RT_Stim_Hand.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_Enter_Trial_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var feedback_dur;
var feedback;
var corr;
var rt;
var press;
function RT_Enter_Trial_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Enter_Trial_Hand'-------
    for (const thisComponent of RT_Enter_Trial_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (RT_Press_Hand.corr) {
        feedback_dur = 0.3;
        feedback = feedback_p;
        corr = 1;
    } else {
        feedback_dur = 1;
        feedback = feedback_n;
        corr = 0;
    }
    rt = RT_Press_Hand.rt;
    press = RT_Press_Hand.keys;
    if ((trial_count < num_trials_hand)) {
        trial_count = (trial_count + 1);
    }
    
    // was no response the correct answer?!
    if (RT_Press_Hand.keys === undefined) {
      if (['None','none',undefined].includes(finger_item)) {
         RT_Press_Hand.corr = 1;  // correct non-response
      } else {
         RT_Press_Hand.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('RT_Press_Hand.keys', RT_Press_Hand.keys);
    psychoJS.experiment.addData('RT_Press_Hand.corr', RT_Press_Hand.corr);
    if (typeof RT_Press_Hand.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('RT_Press_Hand.rt', RT_Press_Hand.rt);
        routineTimer.reset();
        }
    
    RT_Press_Hand.stop();
    // the Routine "RT_Enter_Trial_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var RT_FeedbackComponents;
function RT_FeedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Feedback'-------
    t = 0;
    RT_FeedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RT_Circle_Frame_Feedback.setOpacity(circle_frame_opacity);
    RT_Circle_Frame_Feedback.setLineColor(new util.Color(circle_frame_color));
    RT_Circle_Frame_Feedback.setLineWidth(circle_wd);
    RT_Feedback_Image.setImage(feedback);
    // keep track of which components have finished
    RT_FeedbackComponents = [];
    RT_FeedbackComponents.push(RT_Circle_Frame_Feedback);
    RT_FeedbackComponents.push(RT_Feedback_Image);
    
    for (const thisComponent of RT_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_FeedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RT_Circle_Frame_Feedback* updates
    if (t >= 0.0 && RT_Circle_Frame_Feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Circle_Frame_Feedback.tStart = t;  // (not accounting for frame time here)
      RT_Circle_Frame_Feedback.frameNStart = frameN;  // exact frame index
      
      RT_Circle_Frame_Feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RT_Circle_Frame_Feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RT_Circle_Frame_Feedback.setAutoDraw(false);
    }
    
    // *RT_Feedback_Image* updates
    if (t >= 0.0 && RT_Feedback_Image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Feedback_Image.tStart = t;  // (not accounting for frame time here)
      RT_Feedback_Image.frameNStart = frameN;  // exact frame index
      
      RT_Feedback_Image.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RT_Feedback_Image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RT_Feedback_Image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RT_FeedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Feedback'-------
    for (const thisComponent of RT_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "RT_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Post_TrialComponents;
function Post_TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Post_Trial'-------
    t = 0;
    Post_TrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Post_Trial_Circle_Frame.setLineColor(new util.Color(circle_frame_color));
    Post_Trial_Circle_Frame.setLineWidth(circle_wd);
    if ((stim_type === "Hand")) {
        psychoJS.experiment.addData("Symbol", stim_hand);
        psychoJS.experiment.addData("Ctx", 0);
        psychoJS.experiment.addData("Color", [99, 99, 99]);
    } else {
        psychoJS.experiment.addData("Symbol", stim_item);
        psychoJS.experiment.addData("Shape", image_item);
        psychoJS.experiment.addData("Ctx", ctx_item);
        psychoJS.experiment.addData("Color", ctx_color_item);
    }
    psychoJS.experiment.addData("Stim_Num", stim_num_item);
    psychoJS.experiment.addData("Key_Num", key_item);
    psychoJS.experiment.addData("Stim_Type", stim_type);
    psychoJS.experiment.addData("True_Key", finger_item);
    psychoJS.experiment.addData("Block_Type", block_type);
    psychoJS.experiment.addData("Remap", remap);
    psychoJS.experiment.addData("Repeat_Count", repeat_count);
    psychoJS.experiment.addData("Trial_Count", trial_count-1);
    psychoJS.experiment.addData("Grp", grp);
    psychoJS.experiment.addData("Block_Num", block_count);
    psychoJS.experiment.addData("Prep_Time", prep_time);
    psychoJS.experiment.addData("Ctx_Prep_Time", ctx_prep_time);
    psychoJS.experiment.addData("Actual_Press", press);
    psychoJS.experiment.addData("RT", rt);
    psychoJS.experiment.addData("Correct", corr);
    psychoJS.experiment.addData("Session", session);
    
    Post_Trial_HandShape.setOpacity(hand_opacity);
    Post_Trial_HandShape.setImage(hand_shape);
    // keep track of which components have finished
    Post_TrialComponents = [];
    Post_TrialComponents.push(Post_Trial_Circle_Frame);
    Post_TrialComponents.push(Post_Trial_HandShape);
    
    for (const thisComponent of Post_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Post_TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Post_Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Post_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Post_Trial_Circle_Frame* updates
    if (t >= 0.0 && Post_Trial_Circle_Frame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Post_Trial_Circle_Frame.tStart = t;  // (not accounting for frame time here)
      Post_Trial_Circle_Frame.frameNStart = frameN;  // exact frame index
      
      Post_Trial_Circle_Frame.setAutoDraw(true);
    }

    frameRemains = 0.0 + post_trial_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Post_Trial_Circle_Frame.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Post_Trial_Circle_Frame.setAutoDraw(false);
    }
    
    // *Post_Trial_HandShape* updates
    if (t >= 0.0 && Post_Trial_HandShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Post_Trial_HandShape.tStart = t;  // (not accounting for frame time here)
      Post_Trial_HandShape.frameNStart = frameN;  // exact frame index
      
      Post_Trial_HandShape.setAutoDraw(true);
    }

    frameRemains = 0.0 + post_trial_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Post_Trial_HandShape.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Post_Trial_HandShape.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Post_TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Post_TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Post_Trial'-------
    for (const thisComponent of Post_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Post_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_HAND_TR_press_allKeys;
var Instr_TR_HandComponents;
function Instr_TR_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_TR_Hand'-------
    t = 0;
    Instr_TR_HandClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr_HAND_TR_text.setText(instr_tr_text_hand);
    Instr_HAND_TR_press.keys = undefined;
    Instr_HAND_TR_press.rt = undefined;
    _Instr_HAND_TR_press_allKeys = [];
    block_type = "TR";
    stim_type = "Hand";
    remap = 0;
    block_count = 0;
    hand_opacity = 1;
    
    // keep track of which components have finished
    Instr_TR_HandComponents = [];
    Instr_TR_HandComponents.push(instr_HAND_TR_text);
    Instr_TR_HandComponents.push(Instr_HAND_TR_press);
    
    for (const thisComponent of Instr_TR_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_TR_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_TR_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_TR_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_HAND_TR_text* updates
    if (t >= 0.0 && instr_HAND_TR_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_HAND_TR_text.tStart = t;  // (not accounting for frame time here)
      instr_HAND_TR_text.frameNStart = frameN;  // exact frame index
      
      instr_HAND_TR_text.setAutoDraw(true);
    }

    
    // *Instr_HAND_TR_press* updates
    if (t >= 0.0 && Instr_HAND_TR_press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_HAND_TR_press.tStart = t;  // (not accounting for frame time here)
      Instr_HAND_TR_press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_HAND_TR_press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_HAND_TR_press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_HAND_TR_press.clearEvents(); });
    }

    if (Instr_HAND_TR_press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_HAND_TR_press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _Instr_HAND_TR_press_allKeys = _Instr_HAND_TR_press_allKeys.concat(theseKeys);
      if (_Instr_HAND_TR_press_allKeys.length > 0) {
        Instr_HAND_TR_press.keys = _Instr_HAND_TR_press_allKeys[0].name;  // just the first key pressed
        Instr_HAND_TR_press.rt = _Instr_HAND_TR_press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_TR_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_TR_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_TR_Hand'-------
    for (const thisComponent of Instr_TR_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_HAND_TR_press.keys', Instr_HAND_TR_press.keys);
    if (typeof Instr_HAND_TR_press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_HAND_TR_press.rt', Instr_HAND_TR_press.rt);
        routineTimer.reset();
        }
    
    Instr_HAND_TR_press.stop();
    // the Routine "Instr_TR_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_Block_Num_Press_allKeys;
var Instr_Block_NumComponents;
function Instr_Block_NumRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_Block_Num'-------
    t = 0;
    Instr_Block_NumClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_Block_Num_Text.setText((('Block ' + block_count) + '\nPress (H, U, or I) to start'));
    Instr_Block_Num_Press.keys = undefined;
    Instr_Block_Num_Press.rt = undefined;
    _Instr_Block_Num_Press_allKeys = [];
    // keep track of which components have finished
    Instr_Block_NumComponents = [];
    Instr_Block_NumComponents.push(Instr_Block_Num_Text);
    Instr_Block_NumComponents.push(Instr_Block_Num_Press);
    
    for (const thisComponent of Instr_Block_NumComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_Block_NumRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_Block_Num'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_Block_NumClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_Block_Num_Text* updates
    if (t >= 0.0 && Instr_Block_Num_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Block_Num_Text.tStart = t;  // (not accounting for frame time here)
      Instr_Block_Num_Text.frameNStart = frameN;  // exact frame index
      
      Instr_Block_Num_Text.setAutoDraw(true);
    }

    
    // *Instr_Block_Num_Press* updates
    if (t >= 1 && Instr_Block_Num_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_Block_Num_Press.tStart = t;  // (not accounting for frame time here)
      Instr_Block_Num_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_Block_Num_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_Block_Num_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_Block_Num_Press.clearEvents(); });
    }

    if (Instr_Block_Num_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_Block_Num_Press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _Instr_Block_Num_Press_allKeys = _Instr_Block_Num_Press_allKeys.concat(theseKeys);
      if (_Instr_Block_Num_Press_allKeys.length > 0) {
        Instr_Block_Num_Press.keys = _Instr_Block_Num_Press_allKeys[0].name;  // just the first key pressed
        Instr_Block_Num_Press.rt = _Instr_Block_Num_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_Block_NumComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_Block_NumRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_Block_Num'-------
    for (const thisComponent of Instr_Block_NumComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_Block_Num_Press.keys', Instr_Block_Num_Press.keys);
    if (typeof Instr_Block_Num_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_Block_Num_Press.rt', Instr_Block_Num_Press.rt);
        routineTimer.reset();
        }
    
    Instr_Block_Num_Press.stop();
    // the Routine "Instr_Block_Num" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var tr_press_early;
var tr_press_late;
var tr_press_tooearly;
var tr_press_toolate;
var tr_penalty;
var tr_feedback;
var _TR_Press_Hand_allKeys;
var TR_Enter_Trials_HandComponents;
function TR_Enter_Trials_HandRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Enter_Trials_Hand'-------
    t = 0;
    TR_Enter_Trials_HandClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    routineTimer.reset(time_limit);
    tr_press_early = 0;
    tr_press_late = 0;
    tr_press_tooearly = 0;
    tr_press_toolate = 0;
    tr_penalty = 0;
    tr_feedback = 0;
    
    TR_Circle_Hand.setOpacity(circle_opacity);
    TR_Circle_Hand.setLineColor(new util.Color(circle_color));
    TR_Circle_Hand.setLineWidth(circle_wd);
    TR_Circle_Hand.setSize([0.26 + 0.2 * time_limit,0.26 + 0.2 * time_limit]);
    TR_Circle_Frame_Hand.setOpacity(circle_frame_opacity);
    TR_Circle_Frame_Hand.setLineColor(new util.Color(circle_frame_color));
    TR_Circle_Frame_Hand.setLineWidth(circle_wd);
    TR_HandShape.setImage(hand_shape);
    TR_Stim_Hand.setPos(position_item);
    TR_Press_Hand.keys = undefined;
    TR_Press_Hand.rt = undefined;
    _TR_Press_Hand_allKeys = [];
    // keep track of which components have finished
    TR_Enter_Trials_HandComponents = [];
    TR_Enter_Trials_HandComponents.push(TR_Circle_Hand);
    TR_Enter_Trials_HandComponents.push(TR_Circle_Frame_Hand);
    TR_Enter_Trials_HandComponents.push(TR_HandShape);
    TR_Enter_Trials_HandComponents.push(TR_Stim_Hand);
    TR_Enter_Trials_HandComponents.push(TR_Press_Hand);
    
    for (const thisComponent of TR_Enter_Trials_HandComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_Enter_Trials_HandRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Enter_Trials_Hand'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_Enter_Trials_HandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TR_Circle_Hand* updates
    if (t >= 0.0 && TR_Circle_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Circle_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Circle_Hand.frameNStart = frameN;  // exact frame index
      
      TR_Circle_Hand.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Circle_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Circle_Hand.setAutoDraw(false);
    }
    
    if (TR_Circle_Hand.status === PsychoJS.Status.STARTED){ // only update if being drawn
      TR_Circle_Hand.setSize([(0.26 + (0.2 * routineTimer.getTime())), (0.26 + (0.2 * routineTimer.getTime()))]);
    }
    
    // *TR_Circle_Frame_Hand* updates
    if (t >= 0.0 && TR_Circle_Frame_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Circle_Frame_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Circle_Frame_Hand.frameNStart = frameN;  // exact frame index
      
      TR_Circle_Frame_Hand.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Circle_Frame_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Circle_Frame_Hand.setAutoDraw(false);
    }
    
    // *TR_HandShape* updates
    if (t >= 0.0 && TR_HandShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_HandShape.tStart = t;  // (not accounting for frame time here)
      TR_HandShape.frameNStart = frameN;  // exact frame index
      
      TR_HandShape.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_HandShape.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_HandShape.setAutoDraw(false);
    }
    
    // *TR_Stim_Hand* updates
    if (t >= stim_start_time && TR_Stim_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Stim_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Stim_Hand.frameNStart = frameN;  // exact frame index
      
      TR_Stim_Hand.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Stim_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Stim_Hand.setAutoDraw(false);
    }
    
    // *TR_Press_Hand* updates
    if (t >= 0.0 && TR_Press_Hand.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Press_Hand.tStart = t;  // (not accounting for frame time here)
      TR_Press_Hand.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_Press_Hand.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_Press_Hand.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_Press_Hand.clearEvents(); });
    }

    frameRemains = 0.0 + time_limit - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Press_Hand.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Press_Hand.status = PsychoJS.Status.FINISHED;
  }

    if (TR_Press_Hand.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_Press_Hand.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _TR_Press_Hand_allKeys = _TR_Press_Hand_allKeys.concat(theseKeys);
      if (_TR_Press_Hand_allKeys.length > 0) {
        TR_Press_Hand.keys = _TR_Press_Hand_allKeys[0].name;  // just the first key pressed
        TR_Press_Hand.rt = _TR_Press_Hand_allKeys[0].rt;
        // was this correct?
        if (TR_Press_Hand.keys == finger_item) {
            TR_Press_Hand.corr = 1;
        } else {
            TR_Press_Hand.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_Enter_Trials_HandComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var tr_feedback_text_color;
var tr_feedback_text;
var tr_penalty_text;
function TR_Enter_Trials_HandRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Enter_Trials_Hand'-------
    for (const thisComponent of TR_Enter_Trials_HandComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((TR_Press_Hand.keys !== undefined)) {
        if (TR_Press_Hand.corr) {
            feedback = feedback_p;
            corr = 1;
        } else {
            feedback = feedback_n;
            corr = 0;
        }
        if ((TR_Press_Hand.rt < ((time_limit - 0.2) - 0.3))) {
            tr_press_tooearly = 1;
            tr_penalty = 1;
        } else {
            tr_feedback = 1;
            tr_timing_good = (tr_timing_good + 1);
            if ((TR_Press_Hand.rt < ((time_limit - 0.2) - timing_tol_early))) {
                tr_press_early = 1;
            } else {
                if ((TR_Press_Hand.rt > ((time_limit - 0.2) + timing_tol_late))) {
                    tr_press_late = 1;
                }
            }
        }
    } else {
        tr_press_toolate = 1;
        tr_penalty = 1;
        corr = 0;
    }
    rt = TR_Press_Hand.rt;
    press = TR_Press_Hand.keys;
    feedback_dur = 0.3;
    tr_feedback_text_color = [1, 1, 1];
    if ((tr_penalty === 1)) {
        if ((tr_press_toolate === 1)) {
            tr_penalty_text = penalty_toolate_text;
        } else {
            if ((tr_press_tooearly === 1)) {
                tr_penalty_text = penalty_tooearly_text;
            }
        }
    } else {
        if ((tr_feedback === 1)) {
            if ((tr_press_late === 1)) {
                tr_feedback_text = feedback_late_text;
            } else {
                if ((tr_press_early === 1)) {
                    tr_feedback_text = feedback_early_text;
                } else {
                    tr_feedback_text = feedback_good_text;
                }
            }
        }
    }
    if ((trial_count < num_trials_hand)) {
        trial_count = (trial_count + 1);
    }
    
    // was no response the correct answer?!
    if (TR_Press_Hand.keys === undefined) {
      if (['None','none',undefined].includes(finger_item)) {
         TR_Press_Hand.corr = 1;  // correct non-response
      } else {
         TR_Press_Hand.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('TR_Press_Hand.keys', TR_Press_Hand.keys);
    psychoJS.experiment.addData('TR_Press_Hand.corr', TR_Press_Hand.corr);
    if (typeof TR_Press_Hand.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_Press_Hand.rt', TR_Press_Hand.rt);
        routineTimer.reset();
        }
    
    TR_Press_Hand.stop();
    // the Routine "TR_Enter_Trials_Hand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var TR_FeedbackComponents;
function TR_FeedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Feedback'-------
    
    t = 0;
    TR_FeedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Tr_Circle_Frame_Feedback.setOpacity(circle_frame_opacity);
    Tr_Circle_Frame_Feedback.setLineColor(new util.Color(circle_frame_color));
    Tr_Circle_Frame_Feedback.setLineWidth(circle_wd);
    TR_Feedback_Text.setColor(new util.Color(tr_feedback_text_color));
    TR_Feedback_Text.setText(tr_feedback_text);
    TR_Feedback_Image.setImage(feedback);
    // keep track of which components have finished
    TR_FeedbackComponents = [];
    TR_FeedbackComponents.push(Tr_Circle_Frame_Feedback);
    TR_FeedbackComponents.push(TR_Feedback_Text);
    TR_FeedbackComponents.push(TR_Feedback_Image);
    
    for (const thisComponent of TR_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_FeedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Feedback'-------
    let continueRoutine = true; // until we're told otherwise

    // get current time
    t = TR_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Tr_Circle_Frame_Feedback* updates
    if (t >= 0.0 && Tr_Circle_Frame_Feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Tr_Circle_Frame_Feedback.tStart = t;  // (not accounting for frame time here)
      Tr_Circle_Frame_Feedback.frameNStart = frameN;  // exact frame index
      
      Tr_Circle_Frame_Feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Tr_Circle_Frame_Feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Tr_Circle_Frame_Feedback.setAutoDraw(false);
    }
    
    // *TR_Feedback_Text* updates
    if (t >= 0.0 && TR_Feedback_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Feedback_Text.tStart = t;  // (not accounting for frame time here)
      TR_Feedback_Text.frameNStart = frameN;  // exact frame index
      
      TR_Feedback_Text.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Feedback_Text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Feedback_Text.setAutoDraw(false);
    }
    
    // *TR_Feedback_Image* updates
    if (t >= 0.0 && TR_Feedback_Image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Feedback_Image.tStart = t;  // (not accounting for frame time here)
      TR_Feedback_Image.frameNStart = frameN;  // exact frame index
      
      TR_Feedback_Image.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Feedback_Image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Feedback_Image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_FeedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Feedback'-------
    for (const thisComponent of TR_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "TR_Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _TR_Penalty_Press_allKeys;
var TR_PenaltyComponents;
function TR_PenaltyRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Penalty'-------
    
    t = 0;
    TR_PenaltyClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    TR_Circle_Frame_Penalty.setOpacity(circle_frame_opacity);
    TR_Circle_Frame_Penalty.setLineColor(new util.Color(circle_frame_color));
    TR_Circle_Frame_Penalty.setLineWidth(circle_wd);
    TR_Penalty_Text.setText(tr_penalty_text);
    TR_Penalty_Press.keys = undefined;
    TR_Penalty_Press.rt = undefined;
    _TR_Penalty_Press_allKeys = [];
    // keep track of which components have finished
    TR_PenaltyComponents = [];
    TR_PenaltyComponents.push(TR_Circle_Frame_Penalty);
    TR_PenaltyComponents.push(TR_Penalty_Text);
    TR_PenaltyComponents.push(TR_Penalty_Press);
    
    for (const thisComponent of TR_PenaltyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_PenaltyRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Penalty'-------
    let continueRoutine = true; // until we're told otherwise

    // get current time
    t = TR_PenaltyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TR_Circle_Frame_Penalty* updates
    if (t >= 0.0 && TR_Circle_Frame_Penalty.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Circle_Frame_Penalty.tStart = t;  // (not accounting for frame time here)
      TR_Circle_Frame_Penalty.frameNStart = frameN;  // exact frame index
      
      TR_Circle_Frame_Penalty.setAutoDraw(true);
    }

    
    // *TR_Penalty_Text* updates
    if (t >= 0.0 && TR_Penalty_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Penalty_Text.tStart = t;  // (not accounting for frame time here)
      TR_Penalty_Text.frameNStart = frameN;  // exact frame index
      
      TR_Penalty_Text.setAutoDraw(true);
    }

    
    // *TR_Penalty_Press* updates
    if (t >= 2 && TR_Penalty_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Penalty_Press.tStart = t;  // (not accounting for frame time here)
      TR_Penalty_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_Penalty_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_Penalty_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_Penalty_Press.clearEvents(); });
    }

    if (TR_Penalty_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_Penalty_Press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _TR_Penalty_Press_allKeys = _TR_Penalty_Press_allKeys.concat(theseKeys);
      if (_TR_Penalty_Press_allKeys.length > 0) {
        TR_Penalty_Press.keys = _TR_Penalty_Press_allKeys[0].name;  // just the first key pressed
        TR_Penalty_Press.rt = _TR_Penalty_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_PenaltyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_PenaltyRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Penalty'-------
    for (const thisComponent of TR_PenaltyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TR_Penalty_Press.keys', TR_Penalty_Press.keys);
    if (typeof TR_Penalty_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_Penalty_Press.rt', TR_Penalty_Press.rt);
        routineTimer.reset();
        }
    
    TR_Penalty_Press.stop();
    // the Routine "TR_Penalty" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var tr_timing_perc;
var TR_Hand_Accuracy_BoolComponents;
function TR_Hand_Accuracy_BoolRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Hand_Accuracy_Bool'-------
    t = 0;
    TR_Hand_Accuracy_BoolClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((block_count > 1)) {
        tr_timing_perc = (tr_timing_good / num_trials_hand);
        if ((tr_timing_perc > 0.7)) {
            trials.finished = true;
        }
    }
    tr_timing_good = 0;
    
    // keep track of which components have finished
    TR_Hand_Accuracy_BoolComponents = [];
    
    for (const thisComponent of TR_Hand_Accuracy_BoolComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_Hand_Accuracy_BoolRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Hand_Accuracy_Bool'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_Hand_Accuracy_BoolClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_Hand_Accuracy_BoolComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_Hand_Accuracy_BoolRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Hand_Accuracy_Bool'-------
    for (const thisComponent of TR_Hand_Accuracy_BoolComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "TR_Hand_Accuracy_Bool" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_CR_Old_Press_allKeys;
var stim_start_time_fix;
var ctx;
var Instr_CR_OldComponents;
function Instr_CR_OldRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_CR_Old'-------
    t = 0;
    Instr_CR_OldClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_CR_Old_Text.setText(instr_cr_old_text);
    Instr_CR_Old_Press.keys = undefined;
    Instr_CR_Old_Press.rt = undefined;
    _Instr_CR_Old_Press_allKeys = [];
    block_type = "CR";
    stim_type = "Symb";
    block_count = 0;
    stim_start_time_fix = 0;
    remap = 0;
    finger = finger_map;
    ctx = ctx_map;
    ctx_color = ctx_color_map;
    hand_opacity = 0;
    
    // keep track of which components have finished
    Instr_CR_OldComponents = [];
    Instr_CR_OldComponents.push(Instr_CR_Old_Text);
    Instr_CR_OldComponents.push(Instr_CR_Old_Press);
    
    for (const thisComponent of Instr_CR_OldComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_CR_OldRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_CR_Old'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_CR_OldClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_CR_Old_Text* updates
    if (t >= 0.0 && Instr_CR_Old_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_Old_Text.tStart = t;  // (not accounting for frame time here)
      Instr_CR_Old_Text.frameNStart = frameN;  // exact frame index
      
      Instr_CR_Old_Text.setAutoDraw(true);
    }

    
    // *Instr_CR_Old_Press* updates
    if (t >= 0.0 && Instr_CR_Old_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_Old_Press.tStart = t;  // (not accounting for frame time here)
      Instr_CR_Old_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_CR_Old_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_Old_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_Old_Press.clearEvents(); });
    }

    if (Instr_CR_Old_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_CR_Old_Press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _Instr_CR_Old_Press_allKeys = _Instr_CR_Old_Press_allKeys.concat(theseKeys);
      if (_Instr_CR_Old_Press_allKeys.length > 0) {
        Instr_CR_Old_Press.keys = _Instr_CR_Old_Press_allKeys[0].name;  // just the first key pressed
        Instr_CR_Old_Press.rt = _Instr_CR_Old_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_CR_OldComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_CR_OldRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_CR_Old'-------
    for (const thisComponent of Instr_CR_OldComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_CR_Old_Press.keys', Instr_CR_Old_Press.keys);
    if (typeof Instr_CR_Old_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_CR_Old_Press.rt', Instr_CR_Old_Press.rt);
        routineTimer.reset();
        }
    
    Instr_CR_Old_Press.stop();
    // the Routine "Instr_CR_Old" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _RT_Press_allKeys;
var RT_Enter_TrialComponents;
function RT_Enter_TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RT_Enter_Trial'-------
    t = 0;
    RT_Enter_TrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RT_Circle_Fame.setOpacity(circle_frame_opacity);
    RT_Circle_Fame.setLineColor(new util.Color(circle_frame_color));
    RT_Circle_Fame.setLineWidth(circle_wd);
    RT_Ctx.setOpacity(ctx_opacity);
    RT_Ctx.setSize([ctx_size, ctx_size]);
    RT_Ctx.setFillColor(new util.Color(ctx_color_item));
    RT_Ctx.setLineWidth(ctx_wd);
    RT_Stim_Image.setImage(image_item);
    RT_Press.keys = undefined;
    RT_Press.rt = undefined;
    _RT_Press_allKeys = [];
    // keep track of which components have finished
    RT_Enter_TrialComponents = [];
    RT_Enter_TrialComponents.push(RT_Circle_Fame);
    RT_Enter_TrialComponents.push(RT_Ctx);
    RT_Enter_TrialComponents.push(RT_Stim_Image);
    RT_Enter_TrialComponents.push(RT_Press);
    
    for (const thisComponent of RT_Enter_TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RT_Enter_TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RT_Enter_Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RT_Enter_TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RT_Circle_Fame* updates
    if (t >= 0.0 && RT_Circle_Fame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Circle_Fame.tStart = t;  // (not accounting for frame time here)
      RT_Circle_Fame.frameNStart = frameN;  // exact frame index
      
      RT_Circle_Fame.setAutoDraw(true);
    }

    
    // *RT_Ctx* updates
    if (t >= ctx_start_time && RT_Ctx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Ctx.tStart = t;  // (not accounting for frame time here)
      RT_Ctx.frameNStart = frameN;  // exact frame index
      
      RT_Ctx.setAutoDraw(true);
    }

    
    // *RT_Stim_Image* updates
    if (t >= stim_start_time && RT_Stim_Image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Stim_Image.tStart = t;  // (not accounting for frame time here)
      RT_Stim_Image.frameNStart = frameN;  // exact frame index
      
      RT_Stim_Image.setAutoDraw(true);
    }

    
    // *RT_Press* updates
    if (t >= 0.0 && RT_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RT_Press.tStart = t;  // (not accounting for frame time here)
      RT_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { RT_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { RT_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { RT_Press.clearEvents(); });
    }

    if (RT_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = RT_Press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _RT_Press_allKeys = _RT_Press_allKeys.concat(theseKeys);
      if (_RT_Press_allKeys.length > 0) {
        RT_Press.keys = _RT_Press_allKeys[0].name;  // just the first key pressed
        RT_Press.rt = _RT_Press_allKeys[0].rt;
        // was this correct?
        if (RT_Press.keys == finger_item) {
            RT_Press.corr = 1;
        } else {
            RT_Press.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RT_Enter_TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RT_Enter_TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RT_Enter_Trial'-------
    for (const thisComponent of RT_Enter_TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (RT_Press.corr) {
        feedback = feedback_p;
        feedback_dur = 0.3;
        corr = 1;
    } else {
        feedback = feedback_n;
        feedback_dur = 1;
        corr = 0;
    }
    rt = RT_Press.rt;
    press = RT_Press.keys;
    if ((block_type === "RT")) {
        trial_count = (trial_count + 1);
    }
    
    // was no response the correct answer?!
    if (RT_Press.keys === undefined) {
      if (['None','none',undefined].includes(finger_item)) {
         RT_Press.corr = 1;  // correct non-response
      } else {
         RT_Press.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('RT_Press.keys', RT_Press.keys);
    psychoJS.experiment.addData('RT_Press.corr', RT_Press.corr);
    if (typeof RT_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('RT_Press.rt', RT_Press.rt);
        routineTimer.reset();
        }
    
    RT_Press.stop();
    // the Routine "RT_Enter_Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Criterion_DetComponents;
function Criterion_DetRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Criterion_Det'-------
    t = 0;
    Criterion_DetClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (((repeat_count === 0) && RT_Press.corr)) {
        sum_corr[stim_num_item] = (sum_corr[stim_num_item] + 1);
    } else {
        if (((! RT_Press.corr) && (sum_corr[stim_num_item] < num_criterion))) {
            sum_corr[stim_num_item] = 0;
        }
    }
    
    if (RT_Press.corr) {
        trial_count = (trial_count + 1);
        repeat_count = 0;
    } else {
        repeat_count = (repeat_count + 1);
    }
    
    function CR_Crit(ls) {
        for (var i, _pj_c = 0, _pj_a = ls, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if ((i < num_criterion)) {
                return false;
            }
        }
        return true;
    }
    if (CR_Crit(sum_corr)) {
      trials.finished =  true;
    }
    
    // keep track of which components have finished
    Criterion_DetComponents = [];
    
    for (const thisComponent of Criterion_DetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Criterion_DetRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Criterion_Det'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Criterion_DetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Criterion_DetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Criterion_DetRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Criterion_Det'-------
    for (const thisComponent of Criterion_DetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Criterion_Det" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_CR_New_Press_allKeys;
var Instr_CR_NewComponents;
function Instr_CR_NewRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_CR_New'-------
    t = 0;
    Instr_CR_NewClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_CR_New_Text.setText(instr_cr_new_text);
    Instr_CR_New_Press.keys = undefined;
    Instr_CR_New_Press.rt = undefined;
    _Instr_CR_New_Press_allKeys = [];
    block_type = "CR";
    stim_type = "Symb";
    block_count = 0;
    stim_start_time_fix = 0;
    remap = 1;
    finger = finger_remap;
    if ((grp === 2)) {
        ctx = ctx_remap;
        ctx_color = ctx_color_remap;
    } else {
        ctx = ctx_map;
        ctx_color = ctx_color_map;
    }
    hand_opacity = 0;
    
    // keep track of which components have finished
    Instr_CR_NewComponents = [];
    Instr_CR_NewComponents.push(Instr_CR_New_Text);
    Instr_CR_NewComponents.push(Instr_CR_New_Press);
    
    for (const thisComponent of Instr_CR_NewComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_CR_NewRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_CR_New'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_CR_NewClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_CR_New_Text* updates
    if (t >= 0.0 && Instr_CR_New_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_New_Text.tStart = t;  // (not accounting for frame time here)
      Instr_CR_New_Text.frameNStart = frameN;  // exact frame index
      
      Instr_CR_New_Text.setAutoDraw(true);
    }

    
    // *Instr_CR_New_Press* updates
    if (t >= 0.0 && Instr_CR_New_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_CR_New_Press.tStart = t;  // (not accounting for frame time here)
      Instr_CR_New_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_CR_New_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_New_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_CR_New_Press.clearEvents(); });
    }

    if (Instr_CR_New_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_CR_New_Press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _Instr_CR_New_Press_allKeys = _Instr_CR_New_Press_allKeys.concat(theseKeys);
      if (_Instr_CR_New_Press_allKeys.length > 0) {
        Instr_CR_New_Press.keys = _Instr_CR_New_Press_allKeys[0].name;  // just the first key pressed
        Instr_CR_New_Press.rt = _Instr_CR_New_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_CR_NewComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_CR_NewRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_CR_New'-------
    for (const thisComponent of Instr_CR_NewComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_CR_New_Press.keys', Instr_CR_New_Press.keys);
    if (typeof Instr_CR_New_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_CR_New_Press.rt', Instr_CR_New_Press.rt);
        routineTimer.reset();
        }
    
    Instr_CR_New_Press.stop();
    // the Routine "Instr_CR_New" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_RT_Old_Press_allKeys;
var Instr_RT_OldComponents;
function Instr_RT_OldRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_RT_Old'-------
    t = 0;
    Instr_RT_OldClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_RT_Old_Text.setText(instr_rt_old_text);
    Instr_RT_Old_Press.keys = undefined;
    Instr_RT_Old_Press.rt = undefined;
    _Instr_RT_Old_Press_allKeys = [];
    block_type = "RT";
    stim_type = "Symb";
    remap = 0;
    block_count = 0;
    finger = finger_map;
    ctx = ctx_map;
    ctx_color = ctx_color_map;
    stim_start_time_fix = 0;
    hand_opacity = 0;
    
    // keep track of which components have finished
    Instr_RT_OldComponents = [];
    Instr_RT_OldComponents.push(Instr_RT_Old_Text);
    Instr_RT_OldComponents.push(Instr_RT_Old_Press);
    
    for (const thisComponent of Instr_RT_OldComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_RT_OldRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_RT_Old'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_RT_OldClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_RT_Old_Text* updates
    if (t >= 0.0 && Instr_RT_Old_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_Old_Text.tStart = t;  // (not accounting for frame time here)
      Instr_RT_Old_Text.frameNStart = frameN;  // exact frame index
      
      Instr_RT_Old_Text.setAutoDraw(true);
    }

    
    // *Instr_RT_Old_Press* updates
    if (t >= 0.0 && Instr_RT_Old_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_Old_Press.tStart = t;  // (not accounting for frame time here)
      Instr_RT_Old_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_RT_Old_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_Old_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_Old_Press.clearEvents(); });
    }

    if (Instr_RT_Old_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_RT_Old_Press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _Instr_RT_Old_Press_allKeys = _Instr_RT_Old_Press_allKeys.concat(theseKeys);
      if (_Instr_RT_Old_Press_allKeys.length > 0) {
        Instr_RT_Old_Press.keys = _Instr_RT_Old_Press_allKeys[0].name;  // just the first key pressed
        Instr_RT_Old_Press.rt = _Instr_RT_Old_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_RT_OldComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_RT_OldRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_RT_Old'-------
    for (const thisComponent of Instr_RT_OldComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_RT_Old_Press.keys', Instr_RT_Old_Press.keys);
    if (typeof Instr_RT_Old_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_RT_Old_Press.rt', Instr_RT_Old_Press.rt);
        routineTimer.reset();
        }
    
    Instr_RT_Old_Press.stop();
    // the Routine "Instr_RT_Old" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_RT_New_Press_allKeys;
var Instr_RT_NewComponents;
function Instr_RT_NewRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_RT_New'-------
    t = 0;
    Instr_RT_NewClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_RT_New_Text.setText(instr_rt_new_text);
    Instr_RT_New_Press.keys = undefined;
    Instr_RT_New_Press.rt = undefined;
    _Instr_RT_New_Press_allKeys = [];
    block_type = "RT";
    stim_type = "Symb";
    block_count = 0;
    remap = 1;
    finger = finger_remap;
    if ((grp === 2)) {
        ctx = ctx_remap;
        ctx_color = ctx_color_remap;
    } else {
        ctx = ctx_map;
        ctx_color = ctx_color_map;
    }
    stim_start_time_fix = 0;
    hand_opacity = 0;
    
    // keep track of which components have finished
    Instr_RT_NewComponents = [];
    Instr_RT_NewComponents.push(Instr_RT_New_Text);
    Instr_RT_NewComponents.push(Instr_RT_New_Press);
    
    for (const thisComponent of Instr_RT_NewComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_RT_NewRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_RT_New'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_RT_NewClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_RT_New_Text* updates
    if (t >= 0.0 && Instr_RT_New_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_New_Text.tStart = t;  // (not accounting for frame time here)
      Instr_RT_New_Text.frameNStart = frameN;  // exact frame index
      
      Instr_RT_New_Text.setAutoDraw(true);
    }

    
    // *Instr_RT_New_Press* updates
    if (t >= 0.0 && Instr_RT_New_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_RT_New_Press.tStart = t;  // (not accounting for frame time here)
      Instr_RT_New_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_RT_New_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_New_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_RT_New_Press.clearEvents(); });
    }

    if (Instr_RT_New_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_RT_New_Press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _Instr_RT_New_Press_allKeys = _Instr_RT_New_Press_allKeys.concat(theseKeys);
      if (_Instr_RT_New_Press_allKeys.length > 0) {
        Instr_RT_New_Press.keys = _Instr_RT_New_Press_allKeys[0].name;  // just the first key pressed
        Instr_RT_New_Press.rt = _Instr_RT_New_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_RT_NewComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_RT_NewRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_RT_New'-------
    for (const thisComponent of Instr_RT_NewComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_RT_New_Press.keys', Instr_RT_New_Press.keys);
    if (typeof Instr_RT_New_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_RT_New_Press.rt', Instr_RT_New_Press.rt);
        routineTimer.reset();
        }
    
    Instr_RT_New_Press.stop();
    // the Routine "Instr_RT_New" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_TR_Old_Press_allKeys;
var Instr_TR_OldComponents;
function Instr_TR_OldRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_TR_Old'-------
    t = 0;
    Instr_TR_OldClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_TR_Old_Text.setText(instr_tr_old_text);
    Instr_TR_Old_Press.keys = undefined;
    Instr_TR_Old_Press.rt = undefined;
    _Instr_TR_Old_Press_allKeys = [];
    block_type = "TR";
    stim_type = "Symb";
    remap = 0;
    finger = finger_map;
    ctx = ctx_map;
    ctx_color = ctx_color_map;
    block_count = 0;
    hand_opacity = 0;
    
    // keep track of which components have finished
    Instr_TR_OldComponents = [];
    Instr_TR_OldComponents.push(Instr_TR_Old_Text);
    Instr_TR_OldComponents.push(Instr_TR_Old_Press);
    
    for (const thisComponent of Instr_TR_OldComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_TR_OldRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_TR_Old'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_TR_OldClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_TR_Old_Text* updates
    if (t >= 0.0 && Instr_TR_Old_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_Old_Text.tStart = t;  // (not accounting for frame time here)
      Instr_TR_Old_Text.frameNStart = frameN;  // exact frame index
      
      Instr_TR_Old_Text.setAutoDraw(true);
    }

    
    // *Instr_TR_Old_Press* updates
    if (t >= 0.0 && Instr_TR_Old_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_Old_Press.tStart = t;  // (not accounting for frame time here)
      Instr_TR_Old_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_Old_Press.clearEvents(); });
    }

    if (Instr_TR_Old_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_TR_Old_Press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _Instr_TR_Old_Press_allKeys = _Instr_TR_Old_Press_allKeys.concat(theseKeys);
      if (_Instr_TR_Old_Press_allKeys.length > 0) {
        Instr_TR_Old_Press.keys = _Instr_TR_Old_Press_allKeys[0].name;  // just the first key pressed
        Instr_TR_Old_Press.rt = _Instr_TR_Old_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_TR_OldComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_TR_OldRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_TR_Old'-------
    for (const thisComponent of Instr_TR_OldComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_TR_Old_Press.keys', Instr_TR_Old_Press.keys);
    if (typeof Instr_TR_Old_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_TR_Old_Press.rt', Instr_TR_Old_Press.rt);
        routineTimer.reset();
        }
    
    Instr_TR_Old_Press.stop();
    // the Routine "Instr_TR_Old" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _TR_Press_allKeys;
var TR_Enter_TrialsComponents;
function TR_Enter_TrialsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TR_Enter_Trials'-------
    t = 0;
    TR_Enter_TrialsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    routineTimer.reset(time_limit);
    tr_press_early = 0;
    tr_press_late = 0;
    tr_press_tooearly = 0;
    tr_press_toolate = 0;
    tr_penalty = 0;
    tr_feedback = 0;
    
    TR_Circle_Frame.setOpacity(circle_frame_opacity);
    TR_Circle_Frame.setLineColor(new util.Color(circle_frame_color));
    TR_Circle_Frame.setLineWidth(circle_wd);
    TR_Circle.setOpacity(circle_opacity);
    TR_Circle.setLineColor(new util.Color(circle_color));
    TR_Circle.setLineWidth(circle_wd);
    TR_Circle.setSize([0.26 + 0.2 * time_limit,0.26 + 0.2 * time_limit]);
    TR_Ctx.setOpacity(ctx_opacity);
    TR_Ctx.setSize([ctx_size, ctx_size]);
    TR_Ctx.setFillColor(new util.Color(ctx_color_item));
    TR_Ctx.setLineWidth(ctx_wd);
    TR_Stim_Image.setImage(image_item);
    TR_Press.keys = undefined;
    TR_Press.rt = undefined;
    _TR_Press_allKeys = [];
    // keep track of which components have finished
    TR_Enter_TrialsComponents = [];
    TR_Enter_TrialsComponents.push(TR_Circle_Frame);
    TR_Enter_TrialsComponents.push(TR_Circle);
    TR_Enter_TrialsComponents.push(TR_Ctx);
    TR_Enter_TrialsComponents.push(TR_Stim_Image);
    TR_Enter_TrialsComponents.push(TR_Press);
    
    for (const thisComponent of TR_Enter_TrialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function TR_Enter_TrialsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TR_Enter_Trials'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TR_Enter_TrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TR_Circle_Frame* updates
    if (t >= 0.0 && TR_Circle_Frame.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Circle_Frame.tStart = t;  // (not accounting for frame time here)
      TR_Circle_Frame.frameNStart = frameN;  // exact frame index
      
      TR_Circle_Frame.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Circle_Frame.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Circle_Frame.setAutoDraw(false);
    }
    
    // *TR_Circle* updates
    if (t >= 0.0 && TR_Circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Circle.tStart = t;  // (not accounting for frame time here)
      TR_Circle.frameNStart = frameN;  // exact frame index
      
      TR_Circle.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Circle.setAutoDraw(false);
    }
    
    if (TR_Circle.status === PsychoJS.Status.STARTED){ // only update if being drawn
      TR_Circle.setSize([(0.26 + (0.2 * routineTimer.getTime())), (0.26 + (0.2 * routineTimer.getTime()))]);
    }
    
    // *TR_Ctx* updates
    if (t >= ctx_start_time && TR_Ctx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Ctx.tStart = t;  // (not accounting for frame time here)
      TR_Ctx.frameNStart = frameN;  // exact frame index
      
      TR_Ctx.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Ctx.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Ctx.setAutoDraw(false);
    }
    
    // *TR_Stim_Image* updates
    if (t >= stim_start_time && TR_Stim_Image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Stim_Image.tStart = t;  // (not accounting for frame time here)
      TR_Stim_Image.frameNStart = frameN;  // exact frame index
      
      TR_Stim_Image.setAutoDraw(true);
    }

    frameRemains = time_limit  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Stim_Image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Stim_Image.setAutoDraw(false);
    }
    
    // *TR_Press* updates
    if (t >= 0.0 && TR_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TR_Press.tStart = t;  // (not accounting for frame time here)
      TR_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { TR_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { TR_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { TR_Press.clearEvents(); });
    }

    frameRemains = 0.0 + time_limit - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TR_Press.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TR_Press.status = PsychoJS.Status.FINISHED;
  }

    if (TR_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = TR_Press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _TR_Press_allKeys = _TR_Press_allKeys.concat(theseKeys);
      if (_TR_Press_allKeys.length > 0) {
        TR_Press.keys = _TR_Press_allKeys[0].name;  // just the first key pressed
        TR_Press.rt = _TR_Press_allKeys[0].rt;
        // was this correct?
        if (TR_Press.keys == finger_item) {
            TR_Press.corr = 1;
        } else {
            TR_Press.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TR_Enter_TrialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TR_Enter_TrialsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TR_Enter_Trials'-------
    for (const thisComponent of TR_Enter_TrialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((TR_Press.keys !== undefined)) {
        if (TR_Press.corr) {
            feedback = feedback_p;
            corr = 1;
        } else {
            feedback = feedback_n;
            corr = 0;
        }
        if ((TR_Press.rt < ((time_limit - 0.2) - 0.3))) {
            tr_press_tooearly = 1;
            tr_penalty = 1;
        } else {
            tr_feedback = 1;
            tr_timing_good = (tr_timing_good + 1);
            if ((TR_Press.rt < ((time_limit - 0.2) - timing_tol_early))) {
                tr_press_early = 1;
            } else {
                if ((TR_Press.rt > ((time_limit - 0.2) + timing_tol_late))) {
                    tr_press_late = 1;
                }
            }
        }
    } else {
        tr_press_toolate = 1;
        tr_penalty = 1;
        corr = 1;
    }
    rt = TR_Press.rt;
    press = TR_Press.keys;
    feedback_dur = 0.3;
    tr_feedback_text_color = [1, 1, 1];
    if ((tr_penalty === 1)) {
        if ((tr_press_toolate === 1)) {
            tr_penalty_text = penalty_toolate_text;
        } else {
            if ((tr_press_tooearly === 1)) {
                tr_penalty_text = penalty_tooearly_text;
            }
        }
    } else {
        if ((tr_feedback === 1)) {
            if ((tr_press_late === 1)) {
                tr_feedback_text = feedback_late_text;
            } else {
                if ((tr_press_early === 1)) {
                    tr_feedback_text = feedback_early_text;
                } else {
                    tr_feedback_text = feedback_good_text;
                }
            }
        }
    }
    if ((trial_count < num_trials)) {
        trial_count = (trial_count + 1);
    }
    
    // was no response the correct answer?!
    if (TR_Press.keys === undefined) {
      if (['None','none',undefined].includes(finger_item)) {
         TR_Press.corr = 1;  // correct non-response
      } else {
         TR_Press.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('TR_Press.keys', TR_Press.keys);
    psychoJS.experiment.addData('TR_Press.corr', TR_Press.corr);
    if (typeof TR_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('TR_Press.rt', TR_Press.rt);
        routineTimer.reset();
        }
    
    TR_Press.stop();
    // the Routine "TR_Enter_Trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Instr_TR_New_Press_allKeys;
var Instr_TR_NewComponents;
function Instr_TR_NewRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_TR_New'-------
    t = 0;
    Instr_TR_NewClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_TR_New_Text.setText(instr_tr_new_text);
    Instr_TR_New_Press.keys = undefined;
    Instr_TR_New_Press.rt = undefined;
    _Instr_TR_New_Press_allKeys = [];
    block_type = "TR";
    stim_type = "Symb";
    remap = 1;
    finger = finger_remap;
    if ((grp === 2)) {
        ctx = ctx_remap;
        ctx_color = ctx_color_remap;
    } else {
        ctx = ctx_map;
        ctx_color = ctx_color_map;
    }
    block_count = 0;
    hand_opacity = 0;
    
    // keep track of which components have finished
    Instr_TR_NewComponents = [];
    Instr_TR_NewComponents.push(Instr_TR_New_Text);
    Instr_TR_NewComponents.push(Instr_TR_New_Press);
    
    for (const thisComponent of Instr_TR_NewComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_TR_NewRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_TR_New'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_TR_NewClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_TR_New_Text* updates
    if (t >= 0.0 && Instr_TR_New_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_New_Text.tStart = t;  // (not accounting for frame time here)
      Instr_TR_New_Text.frameNStart = frameN;  // exact frame index
      
      Instr_TR_New_Text.setAutoDraw(true);
    }

    
    // *Instr_TR_New_Press* updates
    if (t >= 0.0 && Instr_TR_New_Press.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_TR_New_Press.tStart = t;  // (not accounting for frame time here)
      Instr_TR_New_Press.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_TR_New_Press.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_New_Press.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_TR_New_Press.clearEvents(); });
    }

    if (Instr_TR_New_Press.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_TR_New_Press.getKeys({keyList: ['h', 'u', 'i'], waitRelease: false});
      _Instr_TR_New_Press_allKeys = _Instr_TR_New_Press_allKeys.concat(theseKeys);
      if (_Instr_TR_New_Press_allKeys.length > 0) {
        Instr_TR_New_Press.keys = _Instr_TR_New_Press_allKeys[0].name;  // just the first key pressed
        Instr_TR_New_Press.rt = _Instr_TR_New_Press_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_TR_NewComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_TR_NewRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_TR_New'-------
    for (const thisComponent of Instr_TR_NewComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_TR_New_Press.keys', Instr_TR_New_Press.keys);
    if (typeof Instr_TR_New_Press.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_TR_New_Press.rt', Instr_TR_New_Press.rt);
        routineTimer.reset();
        }
    
    Instr_TR_New_Press.stop();
    // the Routine "Instr_TR_New" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

var _Instr_End_Exp_Key_allKeys;
var Instr_End_ExpComponents;
function Instr_End_ExpRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instr_End_Exp'-------
    t = 0;
    Instr_End_ExpClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Instr_End_Exp_Text.setText(instr_end_exp_text);
    Instr_End_Exp_Key.keys = undefined;
    Instr_End_Exp_Key.rt = undefined;
    _Instr_End_Exp_Key_allKeys = [];
    // keep track of which components have finished
    Instr_End_ExpComponents = [];
    Instr_End_ExpComponents.push(Instr_End_Exp_Text);
    Instr_End_ExpComponents.push(Instr_End_Exp_Key);
    
    for (const thisComponent of Instr_End_ExpComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instr_End_ExpRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instr_End_Exp'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instr_End_ExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr_End_Exp_Text* updates
    if (t >= 0.0 && Instr_End_Exp_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_End_Exp_Text.tStart = t;  // (not accounting for frame time here)
      Instr_End_Exp_Text.frameNStart = frameN;  // exact frame index
      
      Instr_End_Exp_Text.setAutoDraw(true);
    }

    
    // *Instr_End_Exp_Key* updates
    if (t >= 1 && Instr_End_Exp_Key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr_End_Exp_Key.tStart = t;  // (not accounting for frame time here)
      Instr_End_Exp_Key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Instr_End_Exp_Key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Instr_End_Exp_Key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Instr_End_Exp_Key.clearEvents(); });
    }

    if (Instr_End_Exp_Key.status === PsychoJS.Status.STARTED) {
      let theseKeys = Instr_End_Exp_Key.getKeys({keyList: ['space'], waitRelease: false});
      _Instr_End_Exp_Key_allKeys = _Instr_End_Exp_Key_allKeys.concat(theseKeys);
      if (_Instr_End_Exp_Key_allKeys.length > 0) {
        Instr_End_Exp_Key.keys = _Instr_End_Exp_Key_allKeys[0].name;  // just the first key pressed
        Instr_End_Exp_Key.rt = _Instr_End_Exp_Key_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instr_End_ExpComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_End_ExpRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instr_End_Exp'-------
    for (const thisComponent of Instr_End_ExpComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instr_End_Exp_Key.keys', Instr_End_Exp_Key.keys);
    if (typeof Instr_End_Exp_Key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Instr_End_Exp_Key.rt', Instr_End_Exp_Key.rt);
        routineTimer.reset();
        }
    
    Instr_End_Exp_Key.stop();
    // the Routine "Instr_End_Exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  document.body.style.cursor='auto';

  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

// detect what browser participants are using
function detectBrowser() {    
  const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Opera 8.0+
  const isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)); // Safari 3.0+ "[object HTMLElementConstructor]"
  const isIE = /*@cc_on!@*/false || !!document.documentMode; // Internet Explorer 6-11
  const isEdge = !isIE && !!window.StyleMedia; // Edge 20+
  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime); // Chrome 1 - 79
  const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1); // Edge (based on chromium) detection
  const isBlink = (isChrome || isOpera) && !!window.CSS; // Blink engine detection

  let browser;
  if (isOpera)
    browser = 'Opera';
  else if (isFirefox)
    browser = 'Firefox';
  else if (isSafari)
    browser = 'Safari';
  else if (isIE)
    browser = 'IE';
  else if (isEdge)
    browser = 'Edge';
  else if (isChrome)
    browser = 'Chrome';
  else if (isEdgeChromium)
    browser = 'Edge Chromium';
  else if (isBlink)
    browser = 'Blink';
  else
    browser = 'Could not identify browser';
  return browser;
}