import { Router } from "express";
const router = Router();

router.get("/chart", (req, res) => {
  res.send({
    detail: {
      cpu: 80,
      memory: 50,
      hdd: 17,
      total: 57654,
      detect: 457,
      block: 2,
      recent_usage: [1, 2, 5, 4, 5],
      model_name: "CIP-Manager 0.1v",
      license: "aispera",
      license_regi_date: "2021-01-22 14:13",
      uptime: "2021-01-22 14:13",
      recent_backup: "2021-01-22 14:13",
    },
    status: 200,
  });
});

export default router;
