import { getLCP, getFID, getCLS, getTTFB, getFCP } from 'web-vitals';

// const infoDiv = document.createElement('div');
// Object.assign(infoDiv.style, {
//   position: 'fixed',
//   left: 0,
//   top: 0,
//   zIndex: 0,
//   backgroundColor: 'black',
//   color: 'white',
//   padding: '1rem',
//   fontFamily: 'Arial'
// });

// document.body.appendChild(infoDiv);

const metrics = {};
const gatherMetrics = ({ name, value }) => {
  metrics[name] = value;

  chrome.runtime.sendMessage({
    type: 'performance:metric',
    name,
    value
  });

  // const metricsHtml = Object.keys(metrics)
  //   .map((k) => `<div>${k}</div><div>${Math.round(metrics[k])}</div>`)
  //   .join('');

  // infoDiv.innerHTML = `
  // <div style="font-weight: bold; font-size: x-large">Pref Metrics</div>
  //   <div style="display: grid; grid-template-columns: 1fr 1fr; grid-column-gap: 1rem;">
  //   <div>Metric</div>
  //   <div>Value</div>
  //   ${metricsHtml}
  // </div>
  // `;
};

getLCP(gatherMetrics);
getFID(gatherMetrics);
getCLS(gatherMetrics);
getTTFB(gatherMetrics);
getFCP(gatherMetrics);
