import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/index.css'
import 'normalize.css'

import router from "./router"
import pinia from './store'

import { Button } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Search } from 'vant';
import { Tab, Tabs } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Calendar } from 'vant';
import { Rate } from 'vant';
import { NavBar } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Icon } from 'vant';

const app = createApp(App)

app.use(Tab);
app.use(Tabs);
app.use(Search);
app.use(Button)
app.use(Tabbar);
app.use(TabbarItem);
app.use(IndexBar);
app.use(IndexAnchor);
app.use(Cell);
app.use(CellGroup);
app.use(Calendar);
app.use(Rate);
app.use(NavBar);
app.use(Swipe);
app.use(SwipeItem);
app.use(Icon);

app.use(router)
app.use(pinia)
app.mount('#app')
