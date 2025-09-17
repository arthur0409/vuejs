<script setup>
import { ref } from 'vue'

const metricCards = ref([
  { title: 'Doanh thu tháng', value: '4.52 tỷ VND', sub: '+12.5% so với tháng trước' },
  { title: 'Khách hàng mới', value: '2,350', sub: '+8.2% so với tháng trước' },
  { title: 'Đơn hàng online', value: '1,847', sub: '-3.1% so với tuần trước' },
  { title: 'Tồn kho cảnh báo', value: '23', sub: 'Cần xử lý ngay' }
])

const topProducts = ref([
  { id:1, name:'Bim Moony L', sold:1250, sales:'452 triệu VND' },
  { id:2, name:'Sản phẩm B', sold:900, sales:'300 triệu VND' },
  { id:3, name:'Sản phẩm C', sold:700, sales:'210 triệu VND' }
])

// Sample chart data
const lineSeries = ref([{ name: 'Doanh thu', type: 'line', data: [2500, 2000, 9000, 3200, 4300, 3800] }])
const lineX = ref(['T1','T2','T3','T4','T5','T6'])
const lineOption = ref({})

const pieOption = ref({
  series: [{ type: 'pie', data: [ { value: 35, name: 'TP.HCM' }, { value: 28, name: 'Hà Nội' }, { value: 15, name: 'Đà Nẵng' }, { value: 12, name: 'Bình Dương' }, { value: 10, name: 'Khác' } ] }]
})
</script>

<template>
  <div class="dashboard">
    <div class="metrics">
      <DaCard v-for="(card, idx) in metricCards" :key="idx" class="metric-card">
        <div class="metric-title">{{ card.title }}</div>
        <div class="metric-value">{{ card.value }}</div>
        <div class="metric-sub">{{ card.sub }}</div>
      </DaCard>
    </div>

    <div class="charts-row">
      <DaCard title="Doanh thu theo thời gian" class="chart-card">
        <DaLineChart :series="lineSeries" :x-axis="lineX" :option="lineOption" />
      </DaCard>

      <DaCard title="Phân bố theo khu vực" class="chart-card small">
        <DaPieChart :option="pieOption" />
      </DaCard>
    </div>

    <div class="bottom-row">
      <DaCard title="Top sản phẩm bán chạy" class="list-card">
        <DaList>
          <DaListItem v-for="p in topProducts" :key="p.id">
            <div class="product-row">
              <div>{{ p.name }}</div>
              <div class="muted">Đã bán: {{ p.sold }} • Doanh thu: {{ p.sales }}</div>
            </div>
          </DaListItem>
        </DaList>
      </DaCard>

      <DaCard title="Khuyến nghị AI" class="list-card">
        <DaList>
          <DaListItem>Điều phối hàng tồn kho: Chuyển 200 hộp từ HCM sang Bình Dương</DaListItem>
          <DaListItem>Ưu tiên kiểm kho các mặt hàng low-stock</DaListItem>
        </DaList>
      </DaCard>
    </div>
  </div>
</template>

<style scoped>
.dashboard { padding: 16px; }
.metrics { display:flex; gap:16px; margin-bottom:16px }
.metric-card { flex:1; padding:12px }
.metric-title { color:#666; font-size:13px }
.metric-value { font-size:20px; font-weight:700 }
.metric-sub { color:#2aa84f; font-size:12px }
.charts-row { display:flex; gap:16px; }
.chart-card { flex:2 }
.chart-card.small { flex:1 }
.bottom-row { display:flex; gap:16px; margin-top:16px }
.list-card { flex:1 }
.product-row { display:flex; flex-direction:column }
.muted { color:#999; font-size:12px }
</style>
