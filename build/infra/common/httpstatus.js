"use strict";
exports.__esModule = true;
exports.RespuestaDeCodigo = void 0;
var RespuestaDeCodigo = function (statusCode) {
    switch (statusCode) {
        case 100:
            return 'Continuar: El servidor ha recibido la solicitud y continúa procesándola.';
        case 101:
            return 'Cambiar protocolos: El servidor está cambiando a un protocolo diferente.';
        case 102:
            return 'Procesando: El servidor ha recibido y está procesando la solicitud, pero aún no ha enviado una respuesta.';
        case 103:
            return 'Indicios tempranos: El servidor ha enviado algunos encabezados de respuesta preliminares antes de enviar la respuesta final.';
        case 200:
            return 'Éxito: La solicitud se ha completado correctamente.';
        case 201:
            return 'Creado: La solicitud ha sido completada y se ha creado un nuevo recurso.';
        case 202:
            return 'Aceptado: La solicitud se ha aceptado para procesamiento, pero aún no se ha completado.';
        case 203:
            return 'Información no autoritativa: La información devuelta no es la información original del servidor.';
        case 204:
            return 'Sin contenido: La solicitud se ha completado correctamente, pero no hay contenido para devolver.';
        case 205:
            return 'Contenido reiniciado: La solicitud se ha completado correctamente, pero se debe restablecer la vista del usuario.';
        case 206:
            return 'Contenido parcial: La respuesta solo contiene una parte del recurso solicitado.';
        case 300:
            return 'Múltiples opciones: La solicitud tiene varias respuestas posibles.';
        case 301:
            return 'Movido permanentemente: La página ha sido movida permanentemente a una nueva URL.';
        case 302:
            return 'Encontrado: La página se encuentra temporalmente en una nueva URL.';
        case 303:
            return 'Ver otros: La respuesta a la solicitud se puede encontrar en otra URL.';
        case 304:
            return 'No modificado: El recurso solicitado no ha sido modificado desde la última vez que se accedió a él.';
        case 305:
            return 'Proxy necesario: Es necesario configurar un proxy para acceder al recurso solicitado.';
        case 307:
            return 'Redirección temporal: La solicitud debe redirigirse temporalmente a otra URL.';
        case 308:
            return 'Redirección permanente: La solicitud debe redirigirse permanentemente a otra URL.';
        case 400:
            return 'Solicitud incorrecta: La solicitud no se pudo entender o estaba mal formada.';
        case 401:
            return 'No autorizado: La autenticación es necesaria para acceder al recurso solicitado.';
        case 402:
            return 'Pago requerido: Se requiere un pago para acceder al recurso solicitado.';
        case 403:
            return 'Prohibido: El servidor entiende la solicitud, pero se niega a cumplirla.';
        case 404:
            return 'No encontrado: El recurso solicitado no se pudo encontrar en el servidor.';
        case 405:
            return 'Método no permitido: El método de solicitud utilizado no está permitido para el recurso solicitado.';
        case 406:
            return 'No aceptable: El servidor no puede generar una respuesta que cumpla con los criterios de aceptación definidos por';
        case 407:
            return 'Se requiere autenticación de proxy: El cliente debe primero autenticarse a través del proxy.';
        case 408:
            return 'Tiempo de espera de solicitud: El servidor ha esperado demasiado tiempo para recibir una solicitud del cliente.';
        case 409:
            return 'Conflicto: La solicitud no pudo ser procesada debido a un conflicto en la solicitud.';
        case 410:
            return 'Ya no existe: El contenido solicitado ha sido eliminado permanentemente del servidor.';
        case 411:
            return 'Longitud requerida: La longitud de la solicitud no se ha especificado.';
        case 412:
            return 'Falló la precondición: La solicitud contiene una o más condiciones previas que el servidor no pudo cumplir.';
        case 413:
            return 'Entidad demasiado grande: La entidad de solicitud es demasiado grande para ser procesada por el servidor.';
        case 414:
            return 'URI demasiado larga: La URI de la solicitud es demasiado larga y, por lo tanto, el servidor la ha rechazado.';
        case 415:
            return 'Tipo de medio no soportado: El formato de los datos de la solicitud no es compatible con el formato de los datos del servidor.';
        case 416:
            return 'Solicitud fuera de rango: El servidor no puede satisfacer los requisitos de la solicitud.';
        case 417:
            return 'Expectativa fallida: El servidor no puede cumplir con los requisitos del encabezado Expect de la solicitud.';
        case 418:
            return 'Soy una tetera: El servidor se niega a preparar el café porque es una tetera.';
        case 421:
            return 'Directiva incorrecta: El servidor no pudo producir una respuesta que se ajustara a las directivas de acceso del cliente.';
        default:
            return '';
    }
};
exports.RespuestaDeCodigo = RespuestaDeCodigo;
