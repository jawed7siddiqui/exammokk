const EXAM_PRESETS = {
  UPSC_PSC: {
    id: "UPSC_PSC",
    title: "UPSC / State PSC (GS Pattern)",
    badge: "🏛️ UPSC / PSC",
    marksPerQuestion: 2.0,
    negativeMarks: 0.66, // 1/3rd Negative
    penaltyRatioText: "1/3rd Penalty",
    durationMinutes: 120,
    colorClass: "indigo",
  },
  SSC_CGL: {
    id: "SSC_CGL",
    title: "SSC CGL / CPO (Tier-1 Pattern)",
    badge: "⚡ SSC CGL",
    marksPerQuestion: 2.0,
    negativeMarks: 0.5, // 1/4th Negative
    penaltyRatioText: "1/4th Penalty",
    durationMinutes: 60,
    colorClass: "blue",
  },
  RAILWAY_RRB: {
    id: "RAILWAY_RRB",
    title: "Railway RRB (NTPC / Group D Pattern)",
    badge: "🚆 Railway RRB",
    marksPerQuestion: 1.0,
    negativeMarks: 0.33, // 1/3rd Negative
    penaltyRatioText: "1/3rd Penalty",
    durationMinutes: 90,
    colorClass: "emerald",
  },
};
