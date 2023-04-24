import { ActionIcon, Flex, Modal, ModalProps, Stack } from '@mantine/core';
import React, { useRef, useState } from 'react';
import { TicketSummary, TicketSummaryProps } from './TicketSummary';
import Barcode from 'react-barcode';
import { AiOutlineBarcode, AiOutlinePrinter } from 'react-icons/ai';
import { BsQrCode } from 'react-icons/bs';
import QRCode from 'react-qr-code';
import ReactToPrint from 'react-to-print';

interface TicketModalProps extends ModalProps {
    ticket: TicketSummaryProps;
}
/**
 * The modal to view a ticket with its QR code and barcode.
 *
 * @param props Mantine ModalProps & TicketSummaryProps
 */
export function TicketModal(props: TicketModalProps): React.ReactElement {
    const componentToPrint = useRef(null);

    const [qrCodeIsSelected, setQrCodeIsSelected] = useState(true);

    const qrCodeVariant = qrCodeIsSelected ? 'filled' : 'outline';
    const barcodeVariant = qrCodeIsSelected ? 'outline' : 'filled';

    return (
        <Modal
            opened={props.opened}
            onClose={props.onClose}
            centered
            size='auto'
        >
            <Stack align='center'>
                <Stack
                    align='center'
                    ref={componentToPrint}
                    style={{
                        padding: '1rem',
                    }}
                >
                    <TicketSummary {...props.ticket} />

                    {props.ticket.code && (
                        <Flex
                            align='center'
                            style={{ height: '256px' }}
                        >
                            {qrCodeIsSelected ? (
                                <QRCode value={props.ticket.code} />
                            ) : (
                                <Barcode value={props.ticket.code} />
                            )}
                        </Flex>
                    )}
                </Stack>

                {props.ticket.code && (
                    <Flex gap='0.5rem'>
                        <ActionIcon
                            variant={qrCodeVariant}
                            size='lg'
                            onClick={() => {
                                setQrCodeIsSelected(true);
                            }}
                        >
                            <BsQrCode />
                        </ActionIcon>
                        <ActionIcon
                            variant={barcodeVariant}
                            size='lg'
                            onClick={() => {
                                setQrCodeIsSelected(false);
                            }}
                        >
                            <AiOutlineBarcode />
                        </ActionIcon>
                        <ReactToPrint
                            trigger={() => (
                                <ActionIcon
                                    variant='outline'
                                    size='lg'
                                >
                                    <AiOutlinePrinter />
                                </ActionIcon>
                            )}
                            content={() => componentToPrint.current}
                        />
                    </Flex>
                )}
            </Stack>
        </Modal>
    );
}
