// Every programming language, framework, and library has a unique design pattern and guiding philosophy  which makes up for its peculiarity, and it is widely known that NodeJS is built with on the chrome V8 Engine.

// However, the Reactor pattern is the heart of Nodejs.

// The Reactor Pattern.
// To prevent input/output operations from being blocked, the reactor pattern is used. It provides a handler connected to I/O operations for us, I/O requests are generated and sent to a demultiplexer, which handles concurrency to prevent I/O mode blocking, gathers the requests in the form of events, and queues those events accordingly to the Event Loop.

// I/O operations are performed generally in two ways:

// Blocking I/O
// The execution thread will be blocked by the function call associated with an I/O request (user request) in conventional blocking I/O programming until the operation is finished. i.e. Synchronous programming

// 2 Non I/O Blocking
// The system call always returns immediately in this operating mode, without waiting for the data to be read or written. If there are no results available at the time of the call, the function will simply return a predefined constant, indicating that there is no data to return at that time. i.e. Asynchronous programming

// Recipe for the Reactor Pattern.
// Since you have learned that the Reactor pattern is the Heart of NodeJS, then what exactly is the Reactor pattern made of?

// Resources: They are shared by multiple applications for I/O operations, making executions generally slower. (this is because I/O is naturally slow )

// Synchronous Event Demultiplexer: When a read or write operation carried out over one of those resources is finished, the synchronous event demultiplexer watches multiple resources and returns a new event (or set of events). The synchronous event demultiplexer is advantageous in this situation because it naturally blocks until there are new events to process.
// In conclusion, the Event De-multiplexer pushes the new events into the Event Queue when a set of I/O operations is finished.

// Event Queue and Event Loop:
// An event queue is a repository where events and each handles from the application are held prior to being processed by a receiving program or system, which is the Event Loop. The Event Loop iterates over the event queue

// How does the Reactor Pattern Works?
// Reactor Pattern in NodeJs

// (a) When a new I/O request is generated by the application by submitting a request to the Event Demultiplexer. The application also attaches an handle to the request, which will be called when the operations is complete. (b). Submitting an I/O request is to the Event Demultiplexer asynchronous in nature, hence control is returned back to the application.

// When the operations for request is complete, the events with its corresponding handler is pushed into the Event Queue.

// At this points, the Event Loop iterates over the items in the Event Queue

// The handler for the I/O request in the Event Loop is invoked for execution.

// (a)After the invocation and execution of the Handler, control is given back to the Event Loop. (b) While the handler executes it can cause for a new I/O request be made (usually asynchronous), causing new items to be added to the Event Demultiplexer.

// A new cycle begins when a new event becomes available after all of the items in the Event Queue have been processed by the Event Loop, which then blocks once more on the Event Demultiplexer.

// When there are no more pending operations in the event demultiplexer and no more events to process inside the event queue, a Node.js application will exit.

