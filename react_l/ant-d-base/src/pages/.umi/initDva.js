import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'cards', ...(require('D:/work/study/react/ant-d-base/src/models/cards.js').default) });
app.model({ namespace: 'puzzlecards', ...(require('D:/work/study/react/ant-d-base/src/models/puzzlecards.js').default) });
