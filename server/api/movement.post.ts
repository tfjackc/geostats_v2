import { prisma } from '~/prisma/db'

// https://nuxt.com/docs/guide/directory-structure/server
export default defineEventHandler(async (event) => {
    const formData = await readFormData(event)
    const month = formData.get("month")
    const day = formData.get("day")
    const hour = formData.get("hour")
    const result = await prisma.movement.findMany({
        where: {
            agg_time_period: {
                //@ts-ignore
                equals: hour
            },
            agg_day_period: {
                //@ts-ignore
                equals:day
            },
            month: {
                //@ts-ignore
                equals: month
            }
        }
    });
    const updatedData = JSON.stringify(result, (_key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    );

    return { updatedData };
});