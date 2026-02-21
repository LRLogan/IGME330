export const drawRectangle = (
    ctx,
    x,
    y,
    width,
    height,
    fill_style = "black",
    line_width = 0,
    stroke_style = "black"
) => {

    ctx.save();

    ctx.fillStyle = fill_style;
    ctx.lineWidth = line_width;
    ctx.strokeStyle = stroke_style;

    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fill();

    if(line_width > 0) ctx.stroke();

    ctx.restore();
};

export const drawArc = (
    ctx,
    x,
    y,
    radius,
    start_angle,
    end_angle,
    fill_style = "black",
    line_width = 0,
    stroke_style = "black"
) => {

    ctx.save();

    ctx.fillStyle = fill_style;
    ctx.lineWidth = line_width;
    ctx.strokeStyle = stroke_style;

    ctx.beginPath();
    ctx.arc(x, y, radius, start_angle, end_angle);
    ctx.fill();

    if(line_width > 0) ctx.stroke();

    ctx.restore();
};

export const drawLine = (
    ctx,
    x1,
    y1,
    x2,
    y2,
    line_width = 1,
    stroke_style = "black"
) => {

    ctx.save();

    ctx.lineWidth = line_width;
    ctx.strokeStyle = stroke_style;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.restore();
};