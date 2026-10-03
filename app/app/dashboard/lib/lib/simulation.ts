export interface MetricData {
  timestamp: string;
  value: number;
}

export function generateMockTrafficData(): MetricData[] {
  const data: MetricData[] = [];
  const now = Date.now();
  for (let i = 20; i >= 0; i--) {
    const time = new Date(now - i * 60 * 1000);
    data.push({
      timestamp: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      value: Math.floor(Math.random() * 400) + 1200,
    });
  }
  return data;
}
