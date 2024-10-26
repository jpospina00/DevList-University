import MonitorSchedule from "../models/schedule.model.js";

export class ScheduleService {
    constructor() {}
  

    async createSchedule(scheduleData) {
      const transaction = await MonitorSchedule.sequelize.transaction(); // Inicia una transacción
      try {
        // Inserta cada horario individualmente dentro de la transacción
        const newSchedule = await Promise.all(
          scheduleData.map(schedule => MonitorSchedule.create(schedule, { transaction }))
        );
        
        await transaction.commit(); // Si todo sale bien, confirma la transacción
        return newSchedule;
      } catch (error) {
        await transaction.rollback(); // Si algo falla, revierte la transacción
        throw new Error(`Error creating schedule: ${error.message}`);
      }
    }

    async changeScheduleState(monitorId, status) {
      const transaction = await MonitorSchedule.sequelize.transaction(); // Inicia una transacción
        try {
          const schedule = await MonitorSchedule.findAll({where: {active: "PENDIENTE", monitor_id: monitorId}});
          
          if (!schedule) {
            throw new Error("Schedule not found");
          }
          console.log(schedule[0].dataValues);
          const updatedSchedule = await Promise.all(
            schedule.map(sch => 
              MonitorSchedule.update(
                { active: status }, // Actualización del campo
                { where: { monitorId: sch.monitorId }, transaction } // Condición de actualización
              )
            )
          );
      
          await transaction.commit(); // Confirma la transacción
          return updatedSchedule; 
        } catch (error) {
          throw new Error(`Error accepting schedule: ${error.message}`);
        }
      }
  }
  
  // Exporta una instancia de la clase ScheduleService
  export default new ScheduleService();
  